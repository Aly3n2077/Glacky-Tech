import type { ContactFormData } from "../shared/contact.js";

export interface ContactStorage {
  saveContact(data: ContactFormData): Promise<void>;
}

export const storage: ContactStorage = {
  async saveContact(data) {
    const [{ db }, { contactMessages }] = await Promise.all([
      import("../db/index.js"),
      import("../db/schema.js"),
    ]);
    await db.insert(contactMessages).values(data);
  },
};
