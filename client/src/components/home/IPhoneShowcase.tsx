import { motion } from "framer-motion";
import { Sparkles, BadgeCheck } from "lucide-react";

// Import SVG assets
import iphone13Image from "@/assets/iphone13.svg";
import iphone14Image from "@/assets/iphone14.svg";
import iphone15Image from "@/assets/iphone15.svg";
import repairToolsImage from "@/assets/repair_tools.svg";
import successCaseImage from "@/assets/success_case.svg";

export default function IPhoneShowcase() {
  const showcaseItems = [
    {
      image: iphone13Image,
      title: "iPhone 13 Series",
      description: "Complete repair and unlock solutions for iPhone 13, 13 Mini, 13 Pro, and 13 Pro Max."
    },
    {
      image: iphone14Image,
      title: "iPhone 14 Services",
      description: "Advanced motherboard repair and Face ID fix for iPhone 14 models."
    },
    {
      image: iphone15Image,
      title: "iPhone 15 Support",
      description: "Latest techniques for newest Apple devices including specialized tools for iPhone 15."
    },
    {
      image: repairToolsImage,
      title: "Our Repair Process",
      description: "Step-by-step guide to our professional, clean-room iPhone repair process."
    },
    {
      image: successCaseImage,
      title: "Success Stories",
      description: "Real customer devices that were successfully unlocked, repaired, or recovered."
    },
    {
      image: repairToolsImage,
      title: "Professional Tools",
      description: "Our premium equipment and specialized diagnostic tools for iPhone repairs."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-5"
        style={{ 
          backgroundImage: `url(${iphone15Image})`, 
          backgroundSize: "cover", 
          filter: "blur(15px)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-3">
            <Sparkles className="text-accent mr-2" />
            <span className="uppercase text-sm font-orbitron tracking-widest text-gray-500">Professional Presentations</span>
            <Sparkles className="text-accent ml-2" />
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary">
            iPhone <span className="text-accent">Showcase</span> Gallery
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          <p className="font-roboto mt-6 text-lg text-darkgray max-w-2xl mx-auto">
            Visual demonstrations of our expertise, devices, and successful case studies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden h-[250px]">
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-3 right-3 bg-accent text-white text-xs font-orbitron py-1 px-3 rounded-full shadow-md flex items-center">
                  <BadgeCheck className="w-3 h-3 mr-1" />
                  Premium
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="font-roboto text-darkgray mb-4">{item.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="font-orbitron text-sm text-accent">GlaCK0N Certified</span>
                  <button className="font-orbitron text-sm text-primary hover:text-accent transition-colors duration-300 flex items-center">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-inner">
            <h3 className="font-orbitron text-xl font-bold text-primary mb-4">Request a Custom Presentation</h3>
            <p className="font-roboto text-darkgray mb-6">
              Need a tailored presentation for your business or service? Our team can prepare custom demonstrations for your specific requirements.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center font-orbitron bg-primary hover:bg-accent text-white py-3 px-8 rounded-full text-base transition-all duration-300">
              Request Custom Presentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}