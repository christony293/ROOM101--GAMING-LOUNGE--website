import { Gamepad2, Crown, Globe, Trophy, PartyPopper, Coffee, Moon, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import ps5Bg from '../assets/images/ps5_consoles_bg_1786486392691.jpg';
import vipRoomBg from '../assets/images/vip_room_bg_1786486007149.jpg';
import multiplayerBg from '../assets/images/multiplayer_friends_bg_1786486819134.jpg';
import partyBg from '../assets/images/birthday_party_bg_1786489625407.jpg';
import mojitoBg from '../assets/images/mojitos_neon_cafe_bg_1786489845206.jpg';
import tournamentBg from '../assets/images/esports_tournament_trophy_bg_1786489954385.jpg';

const ClockAndMoon = ({ className }: { className?: string }) => (
  <div className="flex items-center gap-1">
    <Clock className="w-5 h-5" />
    <Moon className="w-5 h-5" />
  </div>
);

const services = [
  {
    icon: Gamepad2,
    title: "PS5 Gaming Sessions",
    description: "Next-gen consoles with the latest titles ready to play.",
    bgImage: ps5Bg
  },
  {
    icon: Crown,
    title: "Private VIP Rooms",
    description: "Exclusive spaces for your squad with premium screens and seating.",
    bgImage: vipRoomBg
  },
  {
    icon: Globe,
    title: "Online Multiplayer",
    description: "High-speed, low-latency fiber for competitive gaming.",
    bgImage: multiplayerBg
  },
  {
    icon: Trophy,
    title: "FC 25 & Call of Duty Tournaments",
    description: "Compete against the best in our regular local tournaments.",
    bgImage: tournamentBg
  },
  {
    icon: PartyPopper,
    title: "Birthday Parties & Events",
    description: "Book the lounge for unforgettable gaming celebrations.",
    bgImage: partyBg
  },
  {
    icon: Coffee,
    title: "Cafe - Drinks & Snacks",
    description: "Full menu of refreshments to keep your energy up.",
    bgImage: mojitoBg
  },
  {
    icon: ClockAndMoon,
    title: "Hourly & Night Packages",
    description: "Flexible rates and all-night passes for marathon sessions."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-950 relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to play.</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            From quick solo sessions to all-night multiplayer battles, we provide the ultimate environment for gamers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative border border-gray-800 p-6 rounded-2xl transition-all duration-300 group overflow-hidden ${
                  service.bgImage 
                    ? 'border-blue-500/30 shadow-[0_0_30px_-10px_rgba(37,99,235,0.15)] md:col-span-2 lg:col-span-2 xl:col-span-2 min-h-[220px]' 
                    : 'bg-gray-900/50 hover:bg-gray-900'
                }`}
              >
                {service.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.bgImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
                  </div>
                )}
                
                <div className={`relative z-10 h-full flex flex-col ${service.bgImage ? 'justify-end' : ''}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                    service.bgImage 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-blue-950/50 text-blue-500 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className={`text-sm leading-relaxed max-w-md ${service.bgImage ? 'text-gray-300' : 'text-gray-400'}`}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
