import { ShieldCheck, Clock, MapPin, Users } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-24 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              El Nozha's top destination for serious gamers.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We built ROOM 101 - Gaming Lounge to be more than just a room with consoles. It's a community hub designed for comfort, competition, and uninterrupted gameplay. Whether you are grabbing a quick bite at our restaurant cafe or settling in for a night package, we ensure a premium experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Always Open</h4>
                  <p className="text-sm text-gray-400 mt-1">24 hours a day, 7 days a week. We never close.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Built for Squads</h4>
                  <p className="text-sm text-gray-400 mt-1">VIP private rooms perfect for you and your friends.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Prime Location</h4>
                  <p className="text-sm text-gray-400 mt-1">Conveniently located on El Hegaz St, Al Matar.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Trusted Local Spot</h4>
                  <p className="text-sm text-gray-400 mt-1">El Nozha's premium 24/7 PS5 gaming lounge & cafe.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual abstract representation instead of fake images */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-900 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
            <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" y1="11" x2="10" y2="15"></line>
                  <line x1="10" y1="11" x2="6" y2="15"></line>
                  <line x1="14" y1="11" x2="18" y2="15"></line>
                  <line x1="18" y1="11" x2="14" y2="15"></line>
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z"></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Ready to play?</h3>
              <p className="text-gray-400 mb-8">Drop in anytime or book a VIP room in advance.</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-300">Standard Setup</span>
                  <span className="text-white font-bold">Walk-in</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-300">VIP Private Room</span>
                  <span className="text-white font-bold">Booking Advised</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-300">Night Packages</span>
                  <span className="text-white font-bold">Available</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
