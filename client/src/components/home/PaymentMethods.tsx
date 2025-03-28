import { motion } from "framer-motion";
import { Bitcoin, CreditCard, DollarSign } from "lucide-react";
import { FaPaypal } from "react-icons/fa";

export default function PaymentMethods() {
  const paymentMethods = [
    {
      icon: <Bitcoin className="text-5xl text-accent" />,
      title: "Crypto",
      description: "Bitcoin, Ethereum, USDT and more"
    },
    {
      icon: <FaPaypal className="text-5xl text-accent" />,
      title: "PayPal",
      description: "Fast and secure online payments"
    },
    {
      icon: <CreditCard className="text-5xl text-accent" />,
      title: "Card Payments",
      description: "Visa, Mastercard, and major cards"
    },
    {
      icon: <DollarSign className="text-5xl text-accent" />,
      title: "Cash Payments",
      description: "Available in Harare, Makoni Shopping Centre"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl font-bold text-primary">
            Payment <span className="text-accent">Methods</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {paymentMethods.map((method, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center card-hover"
              variants={itemVariants}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {method.icon}
              </div>
              <h3 className="font-orbitron text-xl font-bold text-primary mb-2">{method.title}</h3>
              <p className="font-roboto text-sm text-darkgray">
                {method.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
