"use client"

import { motion } from "framer-motion"
import { Truck, Gift, MapPin, Clock, Star, Coffee, Leaf, Award, Phone, Instagram, Facebook, Twitter, Menu as MenuIcon } from "lucide-react"

export default function RiversCafeComplete() {
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-coffee-medium/20 text-4xl"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 5 + i,
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
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-3 bg-accent-green/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent-green/30"
              >
                <Award className="text-accent-green" size={20} />
                <span className="text-coffee-dark font-semibold">Authentic El Salvador Coffee</span>
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
                  className="bg-gradient-to-r from-accent-gold via-accent-copper to-accent-orange bg-clip-text text-transparent"
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
                Authentic El Salvadoran coffee culture meets NYC. Traditional pupusas, 
                premium volcanic soil coffee, and Central American hospitality.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                <motion.button 
                  onClick={handleUberEatsClick}
                  className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-500 flex items-center gap-4 shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="relative z-10"
                  >
                    <Truck size={24} />
                  </motion.div>
                  <span className="relative z-10 font-extrabold">Uber Eats</span>
                </motion.button>

                <motion.button 
                  onClick={handleLoyaltyProgram}
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-500 flex items-center gap-4 shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                    className="relative z-10"
                  >
                    <Gift size={24} />
                  </motion.div>
                  <span className="relative z-10">Loyalty Program</span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="col-span-2 relative h-80 bg-gradient-to-br from-accent-orange/30 via-accent-red/20 to-coffee-dark/30 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ duration: 0.4 }}
                >
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
                      <img src="/coffee-beans.webp" alt="" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  className="h-40 bg-gradient-to-br from-accent-gold/40 to-accent-copper/50 rounded-2xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <motion.span 
                    className="text-5xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <img src="/caffee_shop_06.jpg" alt="" />
                  </motion.span>
                </motion.div>

                <motion.div 
                  className="h-40 bg-gradient-to-br from-accent-orange/40 to-accent-red/30 rounded-2xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <motion.span 
                    className="text-5xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <img src="/coffee-cup.jfif" alt="" />
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-gradient-to-br from-white to-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-playfair font-bold text-coffee-dark mb-4">
              Our Authentic Menu
            </h2>
            <p className="text-xl text-coffee-medium/70">
              Traditional El Salvadoran flavors and premium coffee
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-gold/20 to-accent-copper/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-coffee-dark">Premium Coffee</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">El Salvador Blend</span>
                  <span className="text-accent-gold font-bold">$5.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Cappuccino</span>
                  <span className="text-accent-gold font-bold">$4.75</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Cold Brew</span>
                  <span className="text-accent-gold font-bold">$4.25</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-accent-orange/20 to-accent-red/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src ="/pufusas.jfif" alt="" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-coffee-dark">Traditional Pupusas</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Cheese & Bean</span>
                  <span className="text-accent-orange font-bold">$3.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Pork & Cheese</span>
                  <span className="text-accent-orange font-bold">$4.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Loroco & Cheese</span>
                  <span className="text-accent-orange font-bold">$4.25</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-accent-green/20 to-accent-blue/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="Yuca-frita.jpg" alt="" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-coffee-dark">Traditional Dishes</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Yuca Frita</span>
                  <span className="text-accent-green font-bold">$6.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Platanos Maduros</span>
                  <span className="text-accent-green font-bold">$5.25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Tamales</span>
                  <span className="text-accent-green font-bold">$4.75</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-gradient-to-br from-cream to-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-playfair font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Rivers Cafe USA brings the authentic taste of El Salvador to New York City. 
                  Our family-owned cafe serves traditional pupusas, premium volcanic soil coffee, 
                  and the warmth of Central American hospitality.
                </p>
                <p>
                  From our carefully sourced coffee beans grown in El Salvador's mineral-rich 
                  volcanic soil to our handmade pupusas prepared with traditional recipes 
                  passed down through generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="h-64 bg-gradient-to-br from-accent-gold/30 to-accent-copper/30 rounded-2xl flex items-center justify-center">
                <span className="text-6xl">👨‍🍳</span>
              </div>
              <div className="h-64 bg-gradient-to-br from-accent-green/30 to-accent-blue/30 rounded-2xl flex items-center justify-center">
                <span className="text-6xl">🏪</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}