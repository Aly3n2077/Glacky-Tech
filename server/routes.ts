import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, type ContactFormData } from "./models/contact";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact message (in memory for now)
      const contactMessage = {
        ...validatedData,
        id: Date.now(),
        createdAt: new Date()
      };
      
      // In a real-world scenario, you might:
      // 1. Store in a database
      // 2. Send an email notification
      // 3. Add to a CRM system
      
      // For now, we'll just log the message
      console.log("Contact form submission:", contactMessage);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ 
          success: false, 
          message: error.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
