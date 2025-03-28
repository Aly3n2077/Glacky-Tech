import { motion } from "framer-motion";
import { Apple, Unlock, Smartphone, ShieldCheck, Zap, Wifi } from "lucide-react";

export default function IPhoneServices() {
  const services = [
    {
      icon: <Unlock className="text-2xl text-accent" />,
      title: "iCloud Unlock Services",
      description: "Remove Apple activation lock and iCloud locks from your device with our professional services.",
      features: [
        "Advanced iCloud account removal",
        "Locked Apple ID recovery",
        "Find My iPhone lock removal",
        "Success rate tracker provided"
      ]
    },
    {
      icon: <Smartphone className="text-2xl text-accent" />,
      title: "iPhone Data Recovery",
      description: "Recover lost photos, messages, contacts and important data from damaged or locked devices.",
      features: [
        "Recovery from water damage",
        "Data extraction from locked devices",
        "Secure backup creation",
        "No-recovery, no-fee guarantee"
      ]
    },
    {
      icon: <ShieldCheck className="text-2xl text-accent" />,
      title: "Passcode Removal",
      description: "Professional bypassing of Face ID, Touch ID, and screen passcodes with full data preservation.",
      features: [
        "iPhone passcode bypass",
        "Face ID/Touch ID reset",
        "MDM lock removal",
        "Enterprise lock solutions"
      ]
    },
    {
      icon: <Zap className="text-2xl text-accent" />,
      title: "Performance Optimization",
      description: "Boost your iPhone performance with our specialized hardware and software optimization services.",
      features: [
        "Battery health optimization",
        "Storage clean-up & speed boost",
        "iOS downgrade/upgrade",
        "Custom tweaks for older devices"
      ]
    },
    {
      icon: <Wifi className="text-2xl text-accent" />,
      title: "Baseband Repair",
      description: "Fix cellular connectivity issues, No Service errors, and other baseband-related problems.",
      features: [
        "No service/searching fix",
        "Baseband chip repair",
        "Cellular data problem resolution",
        "SIM reader replacement"
      ]
    },
    {
      icon: <Apple className="text-2xl text-accent" />,
      title: "iOS Customization",
      description: "Premium customization services to personalize your iPhone beyond standard iOS limitations.",
      features: [
        "Custom iOS themes",
        "Enhanced functionality tweaks",
        "Privacy & security enhancements",
        "Advanced user features"
      ]
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
    <section id="iphone-services" className="py-20 bg-gradient-to-b from-slate-900 to-black relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white">
            Advanced <span className="text-accent">iPhone</span> Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="font-roboto mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Specialized solutions for all Apple devices by certified technicians with premium tools
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-800 hover:border-accent transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(255, 0, 0, 0.1), 0 10px 10px -5px rgba(255, 0, 0, 0.04)" 
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-md shadow-red-900/20">
                  {service.icon}
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white ml-4">{service.title}</h3>
              </div>
              
              <p className="font-roboto text-gray-400 mb-4">
                {service.description}
              </p>
              
              <ul className="font-roboto text-gray-300 space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-gray-800">
                <a href="#contact" className="block text-center font-orbitron text-accent hover:text-white transition-colors duration-300">
                  Request Service →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className="inline-flex items-center justify-center font-orbitron bg-accent hover:bg-red-700 text-white py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg shadow-red-900/30">
            Schedule iPhone Service Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}