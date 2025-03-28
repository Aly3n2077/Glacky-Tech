import { motion } from "framer-motion";
import { Percent, Handshake, Truck, UserRound } from "lucide-react";

export default function BulkDeals() {
  const features = [
    {
      icon: <Percent className="text-accent text-xl" />,
      title: "Volume Discounts",
      description: "Tiered pricing based on service quantity"
    },
    {
      icon: <Handshake className="text-accent text-xl" />,
      title: "Reseller Partnerships",
      description: "Exclusive rates for consistent business clients"
    },
    {
      icon: <Truck className="text-accent text-xl" />,
      title: "Priority Processing",
      description: "Faster turnaround for bulk orders"
    },
    {
      icon: <UserRound className="text-accent text-xl" />,
      title: "Dedicated Account Manager",
      description: "Personalized service for business clients"
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="font-orbitron text-3xl font-bold text-primary mb-6">
                Bulk Deals & <span className="text-accent">Discounts</span>
              </h2>
              <p className="font-roboto text-darkgray mb-6">
                Special rates for phone shops, resellers, and bulk service needs. Save more when you order services in volume.
              </p>
              
              <motion.ul 
                className="font-roboto text-darkgray space-y-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.li key={index} className="flex items-start" variants={itemVariants}>
                    <div className="mr-3 mt-1">{feature.icon}</div>
                    <div>
                      <span className="font-medium">{feature.title}</span><br />
                      <span className="text-sm">{feature.description}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              
              <a href="#contact" className="btn-primary font-orbitron bg-primary hover:bg-darkgray text-white py-3 px-8 rounded-full transition-all duration-300 inline-block">
                Request Bulk Pricing
              </a>
            </div>
            
            <div className="lg:w-1/2 bg-primary p-8 lg:p-12 relative overflow-hidden">
              <div className="dot-pattern absolute inset-0"></div>
              <div className="relative z-10">
                <h3 className="font-orbitron text-2xl font-bold text-white mb-6">
                  Business <span className="text-accent">Volume</span> Pricing
                </h3>
                
                <div className="bg-darkgray bg-opacity-50 backdrop-blur rounded-lg mb-6">
                  <div className="grid grid-cols-3 divide-x divide-gray-700">
                    <div className="p-4 text-center">
                      <div className="font-orbitron text-white text-sm mb-1">Quantity</div>
                      <div className="font-roboto text-accent font-bold">10+</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="font-orbitron text-white text-sm mb-1">Quantity</div>
                      <div className="font-roboto text-accent font-bold">25+</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="font-orbitron text-white text-sm mb-1">Quantity</div>
                      <div className="font-roboto text-accent font-bold">50+</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-gray-700 border-t border-gray-700">
                    <div className="p-4 text-center">
                      <div className="font-roboto text-white">10% Off</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="font-roboto text-white">15% Off</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="font-roboto text-white">25% Off</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-darkgray bg-opacity-50 backdrop-blur p-4 rounded-lg">
                    <h4 className="font-orbitron text-white text-lg mb-2">Bulk Unlocking</h4>
                    <p className="font-roboto text-sm text-gray-300 mb-2">
                      Volume pricing for carrier, iCloud, and IMEI services.
                    </p>
                    <div className="font-roboto text-accent font-bold">
                      From $8/device
                    </div>
                  </div>
                  
                  <div className="bg-darkgray bg-opacity-50 backdrop-blur p-4 rounded-lg">
                    <h4 className="font-orbitron text-white text-lg mb-2">Bulk FRP</h4>
                    <p className="font-roboto text-sm text-gray-300 mb-2">
                      Bundle pricing for Google FRP and Samsung Knox services.
                    </p>
                    <div className="font-roboto text-accent font-bold">
                      From $6/device
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
