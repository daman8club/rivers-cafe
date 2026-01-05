"use client"

import { motion } from "framer-motion"
import { Truck, Gift, MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"

export default function RiversCafeHero() {
  const handleUberEatsClick = () => {
    window.open('https://www.ubereats.com/store/rivers-cafe-usa/-gGWpLDGXkyLWWRfxlY_aw?diningMode=DELIVERY', '_blank', 'noopener,noreferrer')
  }

  const handleLoyaltyProgram = () => {
    window.open(
      "https://customer.tapmango.com/home/register?mid=EAAAAKShbsLRin3tLL6p20XH4ky%2brtUH6VvDNJAb1j%2fpHSM%2f",
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section className="relative min-h-screen flex items-center bg-warm-cream overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-deep-espresso/10 to-deep-espresso/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-deep-espresso/10 backdrop-blur-sm px-4 py-2 rounded-full border border-deep-espresso/20"
            >
              <Star className="text-deep-espresso" size={16} />
              <span className="text-sm font-medium text-deep-espresso">Premium El Salvador Coffee</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-playfair font-bold text-deep-espresso leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Rivers Cafe
              <br />
              <motion.span 
                className="text-deep-espresso/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                USA
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-deep-espresso/70 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Experience authentic El Salvadoran coffee culture with our premium volcanic soil beans. From traditional pupusas to artisan coffee blends.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-sm text-deep-espresso/70"
            >
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-deep-espresso" />
                <span>Open Daily 7AM-9PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-deep-espresso" />
                <span>Multiple NYC Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-deep-espresso" />
                <span>4.8/5 Rating</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button 
                onClick={handleUberEatsClick}
                className="bg-deep-espresso text-warm-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-espresso/90 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Order on Uber Eats"
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Truck size={20} />
                </motion.div>
                Order on Uber Eats
              </motion.button>

              <motion.button 
                onClick={handleLoyaltyProgram}
                className="border-2 border-deep-espresso text-deep-espresso px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-espresso hover:text-warm-cream transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Join loyalty program"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                >
                  <Gift size={20} />
                </motion.div>
                Loyalty Program
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Coffee & Food Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Coffee Image */}
              <motion.div 
                className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                  <img src="/coffee-beans.webp" alt="" />
                </div>
              </motion.div>

              {/* Pupusa Image */}
              <motion.div 
                className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                  <span className="text-4xl">🫓</span>
                </div>
              </motion.div>

              {/* Restaurant Interior */}
              <motion.div 
                className="relative h-32 rounded-2xl overflow-hidden shadow-xl col-span-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-r from-deep-espresso/20 to-deep-espresso/40 flex items-center justify-center">
                  <span className="text-2xl">🏪</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-deep-espresso text-warm-cream px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Fresh Daily
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}