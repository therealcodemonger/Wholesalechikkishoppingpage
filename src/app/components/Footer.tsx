import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-xl">🥜</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Chikki Wholesale</h3>
              </div>
            </div>
            <p className="text-sm mb-4">
              India's trusted wholesale supplier of premium chikki and traditional sweets. 
              Serving retailers nationwide since 2009.
            </p>
            <div className="flex gap-3">
              <a href="#" className="size-8 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="size-4" />
              </a>
              <a href="#" className="size-8 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="size-4" />
              </a>
              <a href="#" className="size-8 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="size-4" />
              </a>
              <a href="#" className="size-8 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors">Our Products</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">Bulk Orders</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">Become a Distributor</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">Track Order</a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors">Peanut Chikki</a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors">Sesame Chikki</a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors">Cashew Chikki</a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors">Almond Chikki</a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors">Mixed Nuts Chikki</a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors">Sugar-Free Options</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>
                  Plot No. 45, MIDC Industrial Area,<br />
                  Kolhapur - 416234, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-orange-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-orange-400 flex-shrink-0" />
                <span>sales@chikkiwholesale.com</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-sm font-semibold text-white mb-1">Business Hours</p>
              <p className="text-xs">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-center md:text-left">
              <p>&copy; {currentYear} Chikki Wholesale. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Shipping Policy</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              FSSAI License No: 12345678901234 | GST: 27XXXXX1234X1Z5
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
