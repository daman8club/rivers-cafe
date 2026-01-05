"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react"

export default function VisitUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-accent-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-playfair font-bold text-coffee-dark mb-12">Visit Us</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-coffee-dark mb-2">Location</h3>
                  <p className="text-coffee-medium/80 text-lg">123 Main Street<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-coffee-dark mb-2">Hours</h3>
                  <p className="text-coffee-medium/80 text-lg">
                    Monday - Friday: 7:00 AM - 9:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-coffee-dark mb-2">Contact</h3>
                  <p className="text-coffee-medium/80 text-lg">(212) 555-CAFE</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-3xl font-playfair font-bold text-coffee-dark mb-8">Follow Us</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-red to-accent-orange rounded-full flex items-center justify-center">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-coffee-dark">@riverscafeusa</div>
                  <div className="text-coffee-medium/70">Daily coffee & food photos</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center">
                  <Facebook className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-coffee-dark">Rivers Cafe USA</div>
                  <div className="text-coffee-medium/70">Events & community updates</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
