import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function DevicesSection() {
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

  const availableBrands = ["Apple", "Samsung", "Huawei", "Xiaomi", "Google", "OnePlus"];

  return (
    <section id="devices" className="py-20 bg-secondary dot-pattern relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary">
            Refurbished & <span className="text-accent">Pre-Owned</span> Devices
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="font-roboto mt-6 text-lg text-darkgray max-w-2xl mx-auto">
            Quality tested devices at competitive prices with warranty.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Certified Refurbished */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            variants={itemVariants}
          >
            <div className="md:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Refurbished smartphones" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-8">
              <h3 className="font-orbitron text-2xl font-bold text-primary mb-3">Certified Refurbished Phones</h3>
              <p className="font-roboto text-darkgray mb-5">
                Premium-quality refurbished devices that have been fully tested and restored to like-new condition.
              </p>
              
              <div className="mb-6">
                <h4 className="font-orbitron text-lg font-medium text-primary mb-3">Available Brands:</h4>
                <div className="flex flex-wrap gap-2">
                  {availableBrands.map((brand, index) => (
                    <span key={index} className="bg-lightgray px-3 py-1 rounded-full text-sm font-roboto">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              
              <ul className="font-roboto text-darkgray space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2" />
                  <span>Full 6-month warranty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2" />
                  <span>100% unlocked and ready to use</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2" />
                  <span>Thorough 30-point quality check</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2" />
                  <span>New batteries installed</span>
                </li>
              </ul>
              
              <a href="#contact" className="btn-primary font-orbitron bg-primary hover:bg-darkgray text-white py-3 px-8 rounded-full transition-all duration-300 inline-block">
                View Available Devices
              </a>
            </div>
          </motion.div>
          
          {/* Budget Pre-Owned */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            variants={itemVariants}
          >
            <div className="md:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Budget smartphones display" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-8">
              <h3 className="font-orbitron text-2xl font-bold text-primary mb-3">Budget Pre-Owned Phones</h3>
              <p className="font-roboto text-darkgray mb-5">
                Affordable options with basic quality checks, perfect for budget-conscious customers.
              </p>
              
              <div className="mb-6">
                <h4 className="font-orbitron text-lg font-medium text-primary mb-3">Price Ranges:</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-lightgray p-2 rounded text-center">
                    <div className="text-sm font-roboto">Entry</div>
                    <div className="font-bold text-accent">$50-100</div>
                  </div>
                  <div className="bg-lightgray p-2 rounded text-center">
                    <div className="text-sm font-roboto">Mid</div>
                    <div className="font-bold text-accent">$100-200</div>
                  </div>
                  <div className="bg-lightgray p-2 rounded text-center">
                    <div className="text-sm font-roboto">Premium</div>
                    <div className="font-bold text-accent">$200-350</div>
                  </div>
                </div>
              </div>
              
              <ul className="font-roboto text-darkgray space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2" />
                  <span>3-month basic warranty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2" />
                  <span>Functional testing completed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2" />
                  <span>Ready for immediate use</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2" />
                  <span>Cosmetic grading available</span>
                </li>
              </ul>
              
              <a href="#contact" className="btn-primary font-orbitron bg-primary hover:bg-darkgray text-white py-3 px-8 rounded-full transition-all duration-300 inline-block">
                View Available Devices
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
