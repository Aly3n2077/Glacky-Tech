import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { createApp } from "./app.js";
import type { ContactFormData } from "../shared/contact.js";

const valid = { name: "  Customer  ", email: "person@example.com", service: "other", message: "Please tell me about repairs." };

test("contact API validates, persists before acknowledging, and handles failures safely", async () => {
  const saved: ContactFormData[] = [];
  let fail = false;
  const server = createServer(createApp({ async saveContact(data) {
    if (fail) throw new Error("private database details");
    saved.push(data);
  } }));
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  assert.ok(address && typeof address !== "string");
  const base = `http://127.0.0.1:${address.port}`;
  const post = (body: string) => fetch(`${base}/api/contact`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body,
  });
  try {
    const response = await post(JSON.stringify(valid));
    assert.equal(response.status, 201);
    assert.equal(response.headers.get("cache-control"), "no-store");
    assert.equal(saved.length, 1);
    assert.equal(saved[0].name, "Customer");
    for (const body of [JSON.stringify({ ...valid, service: "invalid" }), JSON.stringify({ ...valid, message: "   " }), "{broken"]) {
      assert.equal((await post(body)).status, 400);
    }
    assert.equal(saved.length, 1);
    assert.equal((await post(JSON.stringify({ ...valid, message: "x".repeat(20000) }))).status, 413);
    const method = await fetch(`${base}/api/contact`);
    assert.equal(method.status, 405);
    assert.equal(method.headers.get("allow"), "POST");
    assert.equal((await fetch(`${base}/api/missing`)).status, 404);
    fail = true;
    const failed = await post(JSON.stringify(valid));
    assert.equal(failed.status, 500);
    assert.ok(!(await failed.text()).includes("private database details"));
    fail = false;
    assert.equal((await post(JSON.stringify(valid))).status, 201);
  } finally {
    server.closeAllConnections();
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});
