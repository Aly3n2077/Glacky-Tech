import { motion } from "framer-motion";
import { MessageSquare, Mail, MapPin, Facebook, Twitter, Instagram, Send } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MessageSquare className="text-2xl text-accent" />,
      title: "WhatsApp",
      description: "Quick responses during business hours",
      contact: "+1 (234) 567-890",
      link: "https://wa.me/1234567890"
    },
    {
      icon: <Mail className="text-2xl text-accent" />,
      title: "Email",
      description: "Detailed inquiries and service requests",
      contact: "support@glackon.tech",
      link: "mailto:support@glackon.tech"
    },
    {
      icon: <MapPin className="text-2xl text-accent" />,
      title: "Visit Us",
      description: "For in-person service and consultations",
      contact: "Makoni Shopping Centre, Harare"
    }
  ];
  
  const socialLinks = [
    { 
      icon: <Facebook size={20} />, 
      url: "https://facebook.com", 
      ariaLabel: "Facebook" 
    },
    { 
      icon: <Twitter size={20} />, 
      url: "https://twitter.com", 
      ariaLabel: "Twitter" 
    },
    { 
      icon: <Instagram size={20} />, 
      url: "https://instagram.com", 
      ariaLabel: "Instagram" 
    },
    { 
      icon: <Send size={20} />, 
      url: "https://telegram.org", 
      ariaLabel: "Telegram" 
    }
  ];

  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="bg-circuit-pattern absolute inset-0 opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent opacity-5 rounded-bl-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.h2 
              className="font-orbitron text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Get In <span className="text-accent">Touch</span>
            </motion.h2>
            <motion.p 
              className="font-roboto text-gray-300 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Have questions or need a service? We're here to help! Reach out to us through any of these channels and we'll respond promptly.
            </motion.p>
            
            <motion.div 
              className="space-y-6 mb-10"
              variants={contactVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.div key={index} className="flex items-start" variants={itemVariants}>
                  <div className="w-12 h-12 rounded-full bg-darkgray flex items-center justify-center mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold">{info.title}</h3>
                    <p className="font-roboto text-gray-300">
                      {info.description}
                    </p>
                    {info.link ? (
                      <a href={info.link} className="font-roboto text-accent hover:text-red-300 transition-colors duration-300">
                        {info.contact}
                      </a>
                    ) : (
                      <p className="font-roboto text-accent">{info.contact}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="w-12 h-12 rounded-full bg-darkgray flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                  aria-label={social.ariaLabel}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-darkgray bg-opacity-50 backdrop-blur rounded-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-orbitron text-2xl font-bold mb-6">Send Us a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
