import { motion } from "framer-motion";
import { Smartphone as PhoneIcon, Apple, Fingerprint } from "lucide-react";

export default function UnlockingServices() {
  const services = [
    {
      icon: <PhoneIcon className="text-2xl text-accent" />,
      title: "Carrier Unlocking",
      description: "Permanent factory unlocks for all major carriers including AT&T, T-Mobile, Verizon, and more.",
      features: [
        "Guaranteed permanent solution",
        "All major carriers supported",
        "Processing time: instant to 7 days"
      ]
    },
    {
      icon: <Apple className="text-2xl text-accent" />,
      title: "iCloud Unlocking",
      description: "Activation lock removal and Find My iPhone (FMI) status checks for Apple devices.",
      features: [
        "Free eligibility checks included",
        "FMI ON/OFF status verification",
        "Processing time: 1-14 days"
      ]
    },
    {
      icon: <Fingerprint className="text-2xl text-accent" />,
      title: "Blacklist & IMEI Repair",
      description: "Restoration of blacklisted phones and IMEI cleaning/repair services.",
      features: [
        "Full blacklist removal",
        "IMEI cleaning and repair",
        "Processing time: 3-10 days"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="unlocking" className="py-20 bg-circuit-pattern">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary">
            Unlocking <span className="text-accent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="font-roboto mt-6 text-lg text-darkgray max-w-2xl mx-auto">
            Professional unlocking solutions to free your device from any restrictions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-orbitron text-xl font-bold text-primary ml-4">{service.title}</h3>
              </div>
              
              <p className="font-roboto text-darkgray mb-4">
                {service.description}
              </p>
              
              <ul className="font-roboto text-darkgray space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
