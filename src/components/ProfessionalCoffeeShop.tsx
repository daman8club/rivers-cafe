"use client"

import { motion } from "framer-motion"
import { Truck, Gift, MapPin, Clock, Star, Coffee, Leaf, Award } from "lucide-react"

export default function ProfessionalCoffeeShop() {
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
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream via-cream-dark to-accent-gold/10 coffee-texture overflow-hidden">
        {/* Floating Coffee Beans */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-coffee-medium/20 text-4xl"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ☕
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-10"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-3 bg-coffee-dark/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent-gold/30"
              >
                <Award className="text-accent-gold" size={20} />
                <span className="text-coffee-dark font-semibold">Premium El Salvador Coffee</span>
              </motion.div>

              <motion.h1 
                className="text-6xl md:text-8xl font-playfair font-bold text-coffee-dark leading-[0.9] tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Rivers Cafe
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-accent-gold to-accent-copper bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  USA
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-coffee-medium/80 max-w-lg leading-relaxed font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Authentic El Salvadoran coffee culture meets NYC. From volcanic soil to your cup, 
                experience tradition in every sip.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap items-center gap-8 text-sm text-coffee-medium/70"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></div>
                  <span className="font-medium">Daily Fresh Roasted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf size={16} className="text-accent-gold" />
                  <span className="font-medium">Organic & Fair Trade</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-accent-gold fill-current" />
                  <span className="font-medium">4.9★ Rating</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                <motion.button 
                  onClick={handleUberEatsClick}
                  className="group bg-coffee-dark text-cream px-10 py-5 rounded-2xl text-lg font-bold hover:bg-coffee-medium transition-all duration-500 flex items-center gap-4 shadow-2xl hover:shadow-coffee-dark/25 relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="relative z-10"
                  >
                    <Truck size={24} />
                  </motion.div>
                  <span className="relative z-10">Order Delivery</span>
                </motion.button>

                <motion.button 
                  onClick={handleLoyaltyProgram}
                  className="group border-3 border-coffee-dark text-coffee-dark px-10 py-5 rounded-2xl text-lg font-bold hover:bg-coffee-dark hover:text-cream transition-all duration-500 flex items-center gap-4 shadow-xl hover:shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-coffee-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <motion.div
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                    className="relative z-10"
                  >
                    <Gift size={24} />
                  </motion.div>
                  <span className="relative z-10">Join Rewards</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Coffee Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Main Coffee Cup */}
                <motion.div 
                  className="col-span-2 relative h-80 bg-gradient-to-br from-coffee-light/20 via-accent-copper/30 to-coffee-dark/40 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-8xl filter drop-shadow-2xl"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotateY: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ☕
                    </motion.div>
                  </div>
                  {/* Steam Effect */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-8 bg-gradient-to-t from-white/60 to-transparent rounded-full"
                        style={{ left: `${i * 8 - 8}px` }}
                        animate={{
                          y: [0, -20, -40],
                          opacity: [0.6, 0.8, 0],
                          scale: [1, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Coffee Beans */}
                <motion.div 
                  className="h-40 bg-gradient-to-br from-accent-gold/30 to-accent-copper/40 rounded-2xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="text-5xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🫘
                  </motion.span>
                </motion.div>

                {/* Pastry */}
                <motion.div 
                  className="h-40 bg-gradient-to-br from-cream-dark to-accent-gold/20 rounded-2xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="text-5xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    🥐
                  </motion.span>
                </motion.div>
              </div>

              {/* Floating Quality Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-accent-gold text-coffee-dark px-6 py-3 rounded-full font-bold text-sm shadow-2xl border-4 border-cream"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✨ Premium Quality
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <motion.section 
        className="py-8 bg-coffee-dark text-cream"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="text-accent-gold" size={24} />
              <div>
                <div className="font-bold">Open Daily</div>
                <div className="text-cream/80 text-sm">7AM - 9PM</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-accent-gold" size={24} />
              <div>
                <div className="font-bold">NYC Locations</div>
                <div className="text-cream/80 text-sm">Multiple Spots</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Coffee className="text-accent-gold" size={24} />
              <div>
                <div className="font-bold">Fresh Roasted</div>
                <div className="text-cream/80 text-sm">Every Morning</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}