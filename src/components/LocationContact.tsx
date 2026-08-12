import { MapPin, Phone, MessageCircle, Clock, ArrowRight } from 'lucide-react';

export default function LocationContact() {
  const mapLink = "https://maps.google.com/?cid=18374482938907093312&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";
  
  return (
    <section id="contact" className="py-24 bg-gray-900 relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find us in El Nozha</h2>
          <p className="text-gray-400 text-lg">
            We're open 24/7. Give us a call to book a VIP room or ask about our current tournaments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Methods */}
          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:01116319430" 
                  className="flex items-center p-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-950 text-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-900 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">Call Us</p>
                    <p className="text-lg font-bold text-white">011 16319430</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
                </a>

                <a 
                  href="https://wa.me/201116319430" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-[#25D366]/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-950 text-[#25D366] rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#25D366]/10 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                    <p className="text-lg font-bold text-white">011 16319430</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#25D366] transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-400 mb-1">Opening Hours</h4>
                <p className="text-gray-300">We are open 24 hours a day, Monday through Sunday. Walk-ins are always welcome.</p>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-gray-950 border border-gray-800 rounded-3xl overflow-hidden flex flex-col">
            <div className="p-8 lg:p-12 flex-1">
              <h3 className="text-2xl font-bold text-white mb-6">Location</h3>
              
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-2">
                    3 شارع محمد الدميري، El Hegaz St<br />
                    Al Matar, El Nozha<br />
                    Cairo Governorate 11728, Egypt
                  </p>
                </div>
              </div>

              <a 
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Open in Google Maps
              </a>
            </div>
            
            {/* Decorative Map Placeholder */}
            <div className="h-48 bg-gray-800 relative w-full overflow-hidden border-t border-gray-800">
              <div className="absolute inset-0 opacity-20" 
                style={{
                  backgroundImage: 'radial-gradient(#374151 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
