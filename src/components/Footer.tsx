"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-3xl font-playfair font-bold text-amber-400 mb-4">
              Rivers Cafe USA
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium coffee experience with artisan blends, crafted fresh daily. 
              Skip the apps, order direct for better service and exclusive rewards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-gray-300 hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="#locations" className="text-gray-300 hover:text-amber-400 transition-colors">Locations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Rewards Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Catering</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-400" />
                <span className="text-gray-300">(212) 555-CAFE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-400" />
                <span className="text-gray-300">hello@riverscafe.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-400 mt-1" />
                <span className="text-gray-300">123 Broadway<br />New York, NY 10001</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Rivers Cafe USA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Accessibility
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}