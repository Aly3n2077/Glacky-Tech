import { motion } from "framer-motion";
import { Unlock, Shield, Smartphone, Wrench } from "lucide-react";

export default function ServicesSummary() {
  const services = [
    {
      icon: <Unlock className="text-3xl text-accent" />,
      title: "Phone Unlocking",
      description: "Carrier, iCloud and IMEI repair services to free your device.",
      link: "#unlocking"
    },
    {
      icon: <Shield className="text-3xl text-accent" />,
      title: "FRP Removal",
      description: "Fast, reliable Google FRP bypass and Samsung Knox services.",
      link: "#frp"
    },
    {
      icon: <Smartphone className="text-3xl text-accent" />,
      title: "Refurbished Devices",
      description: "Quality certified refurbished and pre-owned phones.",
      link: "#devices"
    },
    {
      icon: <Wrench className="text-3xl text-accent" />,
      title: "Repair Services",
      description: "Professional hardware and software repair solutions.",
      link: "#repairs"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-16 bg-secondary relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary">
            Our <span className="text-accent">Premium</span> Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="font-roboto mt-6 text-lg text-darkgray max-w-2xl mx-auto">
            We offer a comprehensive range of professional mobile device services to meet all your needs.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="card-hover bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-orbitron text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="font-roboto text-darkgray">{service.description}</p>
              <a href={service.link} className="mt-4 font-orbitron text-accent hover:text-red-700 transition-colors duration-300 flex items-center">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
