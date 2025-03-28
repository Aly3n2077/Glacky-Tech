import { motion } from "framer-motion";

export default function Hero() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="pt-24 lg:pt-28 bg-primary text-white relative overflow-hidden">
      <div className="dot-pattern absolute inset-0"></div>
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              Premier Phone <span className="text-accent">Services</span> Provider
            </motion.h1>
            <motion.p 
              className="font-roboto mt-6 text-lg md:text-xl text-gray-300 max-w-lg"
              variants={itemVariants}
            >
              Unlock your device's full potential with our professional unlocking, repair, and refurbishment services.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <a href="#services" className="btn-primary font-orbitron bg-accent hover:bg-red-700 text-white py-3 px-8 rounded-full transition-all duration-300 text-center">
                Our Services
              </a>
              <a href="#contact" className="font-orbitron border-2 border-white hover:border-accent hover:text-accent text-white py-3 px-8 rounded-full transition-colors duration-300 text-center">
                Contact Us
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern smartphone repair technician working" 
                className="rounded-lg shadow-2xl relative z-10 w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-secondary to-transparent"></div>
    </section>
  );
}
