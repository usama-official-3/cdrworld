import { Link } from 'react-router-dom';
import { Youtube, Facebook, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
   const phoneNumber = "923015702929";
const message =
  "Assalam-o-Alaikum.\n\nI’m interested in purchasing a Premium CorelDRAW file from Latestcdrsea.com.\nKindly share the payment details and the purchase process.\n\nThank you.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-white text-teal-900 px-3 py-2 rounded font-bold text-xl inline-block mb-4">
              VECTOR SEA
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              A professional platform for CorelDRAW vector files. Perfect for graphic designers, printers & branding projects!
            </p>
            <div className="mt-4">
              <a href="mailto:info@vectorsea.com" className="text-sm text-gray-300 hover:text-lime-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                night6651@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/download-help" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Download Help / Guide
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-lime-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link to="/privacy" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link to="/earn" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Earn With Design
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Donate Resources
                </Link>
              </li>
              <li>
                <Link to="/advertising" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Advertising
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href={whatsappURL}
                className="bg-lime-500 hover:bg-lime-600 p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-gray-300 mt-6">
              <p className="font-semibold mb-2">Download High Quality CDR Files Free of Premium use</p>
              <p className="text-xs">
                Latest CDR Sea Copyright © 2025. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
