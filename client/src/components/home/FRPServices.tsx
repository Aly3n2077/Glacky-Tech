import { motion } from "framer-motion";

export default function FRPServices() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="frp" className="py-20 bg-lightgray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary">
            FRP <span className="text-accent">Removal</span> Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="font-roboto mt-6 text-lg text-darkgray max-w-2xl mx-auto">
            Fast and reliable Factory Reset Protection (FRP) bypass solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smartphone unlocking concept" 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-8">
                <h3 className="font-orbitron text-2xl font-bold text-primary mb-4">Google FRP Bypass</h3>
                <p className="font-roboto text-darkgray mb-6">
                  Our instant remote bypass service for devices like Samsung and Huawei, with on-site options for other brands.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-lightgray rounded-lg p-4">
                    <div className="font-orbitron text-sm text-darkgray uppercase mb-1">Processing Time</div>
                    <div className="font-roboto font-bold text-primary">10-30 minutes</div>
                  </div>
                  <div className="flex-1 bg-lightgray rounded-lg p-4">
                    <div className="font-orbitron text-sm text-darkgray uppercase mb-1">Service Type</div>
                    <div className="font-roboto font-bold text-primary">Remote & On-site</div>
                  </div>
                </div>
                
                <ul className="font-roboto text-darkgray space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Works on all Android versions</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No data loss guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Instant access to your device</span>
                  </li>
                </ul>
                
                <a href="#contact" className="btn-primary w-full block text-center font-orbitron bg-accent hover:bg-red-700 text-white py-3 px-8 rounded-full transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1546027658-7aa750153465?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Samsung smartphone security concept" 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-8">
                <h3 className="font-orbitron text-2xl font-bold text-primary mb-4">Samsung FRP Unlock (No Knox Trip)</h3>
                <p className="font-roboto text-darkgray mb-6">
                  Safe unlock services that avoid triggering Knox security, maintaining your device's warranty status.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-lightgray rounded-lg p-4">
                    <div className="font-orbitron text-sm text-darkgray uppercase mb-1">Processing Time</div>
                    <div className="font-roboto font-bold text-primary">10-60 minutes</div>
                  </div>
                  <div className="flex-1 bg-lightgray rounded-lg p-4">
                    <div className="font-orbitron text-sm text-darkgray uppercase mb-1">Knox Status</div>
                    <div className="font-roboto font-bold text-primary">Preserved (0x0)</div>
                  </div>
                </div>
                
                <ul className="font-roboto text-darkgray space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Maintains warranty status</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Works on all Samsung models</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Preserves Samsung Pay functionality</span>
                  </li>
                </ul>
                
                <a href="#contact" className="btn-primary w-full block text-center font-orbitron bg-accent hover:bg-red-700 text-white py-3 px-8 rounded-full transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
