import { MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import heroBg from '../assets/images/hero_background_1786485055936.jpg';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Room 101 PlayStation Lounge" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* 40% to 60% dark overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gray-950/60" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Open 24 Hours in El Nozha
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Level up your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                gaming experience.
              </span>
            </h1>
            
            <p className="text-xl text-white mb-10 max-w-2xl leading-relaxed">
              ROOM 101's premium 24/7 private PS5 lounges. Private rooms for your squad, hourly & all-night passes, FC 25 tournaments, and cafe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
              >
                <MapPin className="w-5 h-5" />
                Visit Us
              </a>
              
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gray-900 border border-gray-800 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-500" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
