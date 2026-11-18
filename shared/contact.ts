import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  service: z.enum([
    "carrier_unlock", "icloud_unlock", "imei_repair", "frp_bypass",
    "samsung_frp", "refurbished", "software_repair", "hardware_repair",
    "bulk_deal", "other",
  ], { errorMap: () => ({ message: "Please select a valid service." }) }),
  message: z.string().trim().min(10, "Message must be at least 10 characters.").max(5000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
