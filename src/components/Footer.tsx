import { Gamepad2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-900 text-gray-400 flex items-center justify-center border border-gray-800">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-gray-300">ROOM 101 - Gaming Lounge</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="tel:01116319430" className="hover:text-white transition-colors">011 16319430</a>
            <span>•</span>
            <span>El Nozha, Cairo</span>
            <span>•</span>
            <span>Open 24/7</span>
          </div>

        </div>
        
        <div className="mt-8 text-center text-xs text-gray-700">
          © {new Date().getFullYear()} ROOM 101 - Gaming Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
