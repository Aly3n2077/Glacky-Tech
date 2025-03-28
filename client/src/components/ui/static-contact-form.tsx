import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Same validation schema as the original contact form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// This is a static version of the contact form for Netlify deployment
// It simulates form submission without actually sending data to a backend
export default function StaticContactForm() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });
  
  const onSubmit = (data: ContactFormData) => {
    // Simulate API call
    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      console.log("Form data (static version):", data);
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
      });
      
      reset();
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1000);
  };
  
  if (formSubmitted) {
    return (
      <div className="text-center py-8">
        <svg
          className="mx-auto h-16 w-16 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="font-orbitron text-xl font-bold mt-4">Thank You!</h3>
        <p className="font-roboto text-gray-300 mt-2">
          Your message has been successfully sent. We'll get back to you soon!
        </p>
        <button
          className="mt-6 font-orbitron bg-accent hover:bg-red-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
          onClick={() => setFormSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} data-netlify="true">
      {/* Hidden field for Netlify forms */}
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="font-orbitron text-sm block mb-2">Your Name</label>
          <input 
            type="text" 
            id="name" 
            className={`w-full bg-primary border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors duration-300`}
            placeholder="John Doe"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="font-orbitron text-sm block mb-2">Email Address</label>
          <input 
            type="email" 
            id="email" 
            className={`w-full bg-primary border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors duration-300`}
            placeholder="your@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="service" className="font-orbitron text-sm block mb-2">Service Needed</label>
        <select
          id="service"
          className={`w-full bg-primary border ${errors.service ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors duration-300`}
          {...register("service")}
        >
          <option value="">Select a service</option>
          <option value="iphone-unlocking">iPhone Unlocking</option>
          <option value="android-unlocking">Android Unlocking</option>
          <option value="frp-bypass">FRP Bypass</option>
          <option value="icloud-unlock">iCloud Unlock</option>
          <option value="phone-repair">Phone Repair</option>
          <option value="software-fix">Software Issues</option>
          <option value="other">Other Services</option>
        </select>
        {errors.service && (
          <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="font-orbitron text-sm block mb-2">Your Message</label>
        <textarea 
          id="message" 
          rows={4} 
          className={`w-full bg-primary border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors duration-300`}
          placeholder="Tell us about your requirements..."
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <button 
        type="submit" 
        className="btn-primary w-full font-orbitron bg-accent hover:bg-red-700 text-white py-3 px-8 rounded-full transition-all duration-300 flex justify-center items-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}