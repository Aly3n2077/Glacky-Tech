import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed w-full bg-primary text-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="font-orbitron text-2xl md:text-3xl font-bold">
            <span className="text-accent">GlaC</span>K<span className="text-accent">0</span>N
          </span>
          <span className="font-roboto text-sm ml-2 hidden md:inline-block">TECH</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#unlocking" className="font-roboto hover:text-accent transition-colors duration-300">Unlocking</a>
          <a href="#frp" className="font-roboto hover:text-accent transition-colors duration-300">FRP Removal</a>
          <a href="#devices" className="font-roboto hover:text-accent transition-colors duration-300">Devices</a>
          <a href="#repairs" className="font-roboto hover:text-accent transition-colors duration-300">Repairs</a>
          <a href="#contact" className="font-roboto bg-accent hover:bg-red-700 transition-colors duration-300 py-2 px-5 rounded-full">Contact Us</a>
        </nav>
        
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-primary py-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 flex flex-col space-y-3 pb-4">
              <a href="#unlocking" className="font-roboto py-2 hover:text-accent transition-colors duration-300" onClick={closeMenu}>Unlocking</a>
              <a href="#frp" className="font-roboto py-2 hover:text-accent transition-colors duration-300" onClick={closeMenu}>FRP Removal</a>
              <a href="#devices" className="font-roboto py-2 hover:text-accent transition-colors duration-300" onClick={closeMenu}>Devices</a>
              <a href="#repairs" className="font-roboto py-2 hover:text-accent transition-colors duration-300" onClick={closeMenu}>Repairs</a>
              <a href="#contact" className="font-roboto py-2 bg-accent hover:bg-red-700 transition-colors duration-300 text-center rounded-full" onClick={closeMenu}>Contact Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
