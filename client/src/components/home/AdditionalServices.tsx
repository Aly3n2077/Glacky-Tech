import { motion } from "framer-motion";
import { Code, Wrench } from "lucide-react";

export default function AdditionalServices() {
  const softwareServices = [
    {
      title: "Android & iOS Flashing",
      description: "OS updates and restoration for all devices."
    },
    {
      title: "Software Fixes",
      description: "Boot loops, crashes, and performance issues."
    },
    {
      title: "Rooting & Jailbreaking",
      description: "Advanced customization options for power users."
    },
    {
      title: "Data Recovery",
      description: "Retrieve lost photos, messages, and files."
    }
  ];
  
  const hardwareServices = [
    {
      title: "Screen Replacements",
      description: "High-quality LCD and OLED replacements."
    },
    {
      title: "Battery Replacements",
      description: "Restore battery life and performance."
    },
    {
      title: "Charging Port Repairs",
      description: "Fix connectivity and charging issues."
    },
    {
      title: "Button & Camera Repairs",
      description: "Replace damaged components and restore functionality."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="repairs" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="bg-circuit-pattern absolute inset-0 opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Additional <span className="text-accent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="font-roboto mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive repair and maintenance solutions for all your mobile devices.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Software Repairs */}
          <motion.div 
            className="bg-darkgray bg-opacity-70 backdrop-blur rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Code className="text-2xl text-white" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-white ml-4">Software Repairs & Updates</h3>
            </div>
            
            <p className="font-roboto text-gray-300 mb-6">
              Expert software solutions to fix and optimize your device performance.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {softwareServices.map((service, index) => (
                <motion.div key={index} className="bg-primary bg-opacity-50 p-4 rounded" variants={itemVariants}>
                  <h4 className="font-orbitron text-white font-medium mb-2">{service.title}</h4>
                  <p className="font-roboto text-sm text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <a href="#contact" className="btn-primary w-full block text-center font-orbitron bg-accent hover:bg-red-700 text-white py-3 px-8 rounded-full transition-all duration-300">
              Inquire About Software Services
            </a>
          </motion.div>
          
          {/* Hardware Repairs */}
          <motion.div 
            className="bg-darkgray bg-opacity-70 backdrop-blur rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Wrench className="text-2xl text-white" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-white ml-4">Hardware Repairs & Parts</h3>
            </div>
            
            <p className="font-roboto text-gray-300 mb-6">
              Professional repair services and quality replacement parts.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {hardwareServices.map((service, index) => (
                <motion.div key={index} className="bg-primary bg-opacity-50 p-4 rounded" variants={itemVariants}>
                  <h4 className="font-orbitron text-white font-medium mb-2">{service.title}</h4>
                  <p className="font-roboto text-sm text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <a href="#contact" className="btn-primary w-full block text-center font-orbitron bg-accent hover:bg-red-700 text-white py-3 px-8 rounded-full transition-all duration-300">
              Inquire About Hardware Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
