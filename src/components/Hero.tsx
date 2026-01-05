"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Truck, X, Coffee } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Hero() {
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false)
  const { t } = useLanguage()

  const handleUberEatsClick = () => {
    window.open('https://www.ubereats.com/store/rivers-cafe-usa/-gGWpLDGXkyLWWRfxlY_aw?diningMode=DELIVERY', '_blank', 'noopener,noreferrer')
  }

  const handleDoorDashClick = () => {
    window.open('https://doordash.com/store/rivers-cafe', '_blank', 'noopener,noreferrer')
  }

  const handleJoinRewards = () => {
    window.open(
      "https://customer.tapmango.com/home/register?mid=EAAAAKShbsLRin3tLL6p20XH4ky%2brtUH6VvDNJAb1j%2fpHSM%2f",
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <>
      <section className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-orange-300 text-4xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              <img src="/public/coffee-beans.webp" alt="Coffee" width="40" height="40" className="rounded-full" />
            </motion.div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-playfair font-bold text-transparent bg-gradient-to-r from-orange-800 via-red-700 to-amber-800 bg-clip-text leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('hero.title1')}
                <br />
                <motion.span 
                  className="text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {t('hero.title2')}
                </motion.span>
                <br />
                {t('hero.title3')}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-700 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button 
                  onClick={() => setIsDeliveryModalOpen(true)}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold border-4 border-black z-50 relative"
                  style={{ backgroundColor: '#ef4444', color: 'white', padding: '12px 32px', fontSize: '18px', fontWeight: 'bold' }}
                >
                  🚚 CLICK ME - Order Delivery
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Coffee Images */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center relative"
            >
              <div className="relative w-80 h-96">
                {/* Main Coffee Cup */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 border-4 border-orange-200"
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: "0 30px 60px -12px rgba(234, 88, 12, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        y: [0, -15, 0],
                        rotate: [0, 3, -3, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                      className="filter drop-shadow-lg"
                    >
                      <img src="/coffee-cup.jpg" alt="Coffee Cup" width="200" height="200" className="rounded-2xl" />
                    </motion.div>
                  </div>
                  
                  {/* Floating Coffee Beans */}
                  <motion.div
                    className="absolute top-6 right-6"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <img src="/coffee-beans.webp" alt="Coffee Beans" width="48" height="48" className="rounded-full" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-10 left-6"
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, -15, 15, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    <img src="/coffee-beans.webp" alt="Coffee Beans" width="32" height="32" className="rounded-full" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 left-4"
                    animate={{ 
                      x: [0, 15, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      delay: 2
                    }}
                  >
                    <img src="/coffee-beans.webp" alt="Coffee Beans" width="24" height="24" className="rounded-full" />
                  </motion.div>
                  
                  {/* Enhanced Steam Effect */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-12 bg-gradient-to-t from-transparent via-white/60 to-transparent rounded-full"
                        style={{ left: `${i * 10 - 15}px` }}
                        animate={{
                          opacity: [0, 0.8, 0],
                          y: [0, -30],
                          scale: [1, 0.3],
                          x: [0, Math.sin(i) * 10]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
                
                {/* Enhanced Background Coffee Beans Pattern */}
                <div className="absolute -inset-8 -z-10">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute opacity-40"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [0.6, 1.4, 0.6],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 8 + i,
                        repeat: Infinity,
                        delay: i * 0.7
                      }}
                    >
                      <img src="/coffee-beans.webp" alt="" width="32" height="32" className="rounded-full" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Modal */}
      <AnimatePresence>
        {isDeliveryModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDeliveryModalOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="delivery-modal-title"
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-orange-200"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 id="delivery-modal-title" className="text-2xl font-playfair font-bold text-transparent bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text">
                    {t('modal.title')}
                  </h2>
                  <motion.button
                    onClick={() => setIsDeliveryModalOpen(false)}
                    className="text-orange-800 p-2 hover:bg-orange-100 rounded-full transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="space-y-4">
                  <motion.p 
                    className="text-gray-700 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {t('modal.description')}
                  </motion.p>

                  {/* Uber Eats */}
                  <motion.button 
                    onClick={() => {
                      handleUberEatsClick()
                      setIsDeliveryModalOpen(false)
                    }}
                    className="group relative w-full bg-gradient-to-r from-black to-gray-800 text-white p-5 rounded-2xl font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative flex items-center justify-center gap-3">
                      <motion.div 
                        className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-sm font-bold shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        U
                      </motion.div>
                      <span className="text-lg">{t('modal.uberEats') || 'Order on Uber Eats'}</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Truck size={20} />
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* DoorDash */}
                  <motion.button 
                    onClick={() => {
                      handleDoorDashClick()
                      setIsDeliveryModalOpen(false)
                    }}
                    className="group relative w-full bg-gradient-to-r from-red-600 to-red-700 text-white p-5 rounded-2xl font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative flex items-center justify-center gap-3">
                      <motion.div 
                        className="w-8 h-8 bg-white text-red-600 rounded-lg flex items-center justify-center text-sm font-bold shadow-lg"
                        whileHover={{ rotate: -360 }}
                        transition={{ duration: 0.5 }}
                      >
                        D
                      </motion.div>
                      <span className="text-lg">{t('modal.doorDash') || 'Order on DoorDash'}</span>
                      <motion.div
                        animate={{ x: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <Coffee size={20} />
                      </motion.div>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}