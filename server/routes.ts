import type { Express } from "express";
import { contactFormSchema } from "../shared/contact.js";
import { storage, type ContactStorage } from "./storage.js";

export function registerRoutes(app: Express, contactStorage: ContactStorage = storage) {
  app.post("/api/contact", async (req, res, next) => {
    const result = contactFormSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Please check the contact form fields.",
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }
    try {
      await contactStorage.saveContact(result.data);
      res.status(201).json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      next(error);
    }
  });
  app.all("/api/contact", (_req, res) => {
    res.set("Allow", "POST").status(405).json({ success: false, message: "Method not allowed" });
  });
  app.use("/api", (_req, res) => {
    res.status(404).json({ success: false, message: "API endpoint not found" });
  });
}
