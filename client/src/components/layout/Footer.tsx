import { Link } from "wouter";
import { FacebookIcon, TwitterIcon, InstagramIcon, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0">
            <div className="font-orbitron text-2xl font-bold mb-2">
              <span className="text-accent">GlaC</span>K<span className="text-accent">0</span>N 
              <span className="font-roboto text-sm ml-2">TECH</span>
            </div>
            <p className="font-roboto text-sm text-gray-400">
              Premier Phone Services Provider
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-6 lg:mb-0">
            <div>
              <h4 className="font-orbitron text-lg mb-3">Services</h4>
              <ul className="font-roboto text-sm text-gray-400 space-y-2">
                <li><a href="#unlocking" className="hover:text-accent transition-colors duration-300">Unlocking</a></li>
                <li><a href="#frp" className="hover:text-accent transition-colors duration-300">FRP Removal</a></li>
                <li><a href="#devices" className="hover:text-accent transition-colors duration-300">Refurbished Devices</a></li>
                <li><a href="#repairs" className="hover:text-accent transition-colors duration-300">Repairs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-orbitron text-lg mb-3">Support</h4>
              <ul className="font-roboto text-sm text-gray-400 space-y-2">
                <li><a href="#contact" className="hover:text-accent transition-colors duration-300">Contact Us</a></li>
                <li><Link href="/" className="hover:text-accent transition-colors duration-300">FAQ</Link></li>
                <li><Link href="/" className="hover:text-accent transition-colors duration-300">Terms of Service</Link></li>
                <li><Link href="/" className="hover:text-accent transition-colors duration-300">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-orbitron text-lg mb-3">Business Hours</h4>
            <ul className="font-roboto text-sm text-gray-400 space-y-2">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-roboto text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} GlaCK0N Tech. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="Twitter">
              <TwitterIcon size={18} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://telegram.org" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="Telegram">
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
