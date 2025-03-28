import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <Icon className="text-2xl text-accent" />
        </div>
        <h3 className="font-orbitron text-xl font-bold text-primary ml-4">{title}</h3>
      </div>
      
      <p className="font-roboto text-darkgray mb-4">{description}</p>
      
      <ul className="font-roboto text-darkgray space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <a href="#contact" className="btn-primary w-full block text-center font-orbitron bg-primary hover:bg-darkgray text-white py-3 px-8 rounded-full transition-all duration-300">
          Request Service
        </a>
      </div>
    </motion.div>
  );
}
