import { Gamepad2, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white leading-none">ROOM 101</span>
              <span className="text-[10px] tracking-widest text-blue-500 font-semibold mt-1 uppercase">Gaming Lounge</span>
            </div>
          </div>

          {/* CTA */}
          <div>
            <a 
              href="tel:01116319430"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 border border-gray-800 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span className="hidden sm:inline">011 16319430</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
