"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Star, Crown, X, Coffee, Percent } from "lucide-react"

// Move benefits outside component for performance
const benefits = [
  {
    icon: Coffee,
    title: "Free Coffee",
    description: "Earn a free coffee after every 10 purchases"
  },
  {
    icon: Percent,
    title: "Member Discounts",
    description: "Get 20% off all products as a loyalty member"
  },
  {
    icon: Star,
    title: "Birthday Rewards",
    description: "Special birthday treats and exclusive offers"
  },
  {
    icon: Crown,
    title: "VIP Access",
    description: "Early access to new blends and seasonal drinks"
  }
]

export default function RewardsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleTapMangoOpen = () => {
    const popup = window.open(
      "https://customer.tapmango.com/home/register?mid=EAAAAKShbsLRin3tLL6p20XH4ky%2brtUH6VvDNJAb1j%2fpHSM%2f",
      "tapmango-signup",
      "width=800,height=700,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no"
    )
    
    if (!popup) {
      // Fallback if popup is blocked
      window.location.href = "https://customer.tapmango.com/home/register?mid=EAAAAKShbsLRin3tLL6p20XH4ky%2brtUH6VvDNJAb1j%2fpHSM%2f"
    }
  }

  return (
    <>
      <section className="py-20 bg-deep-espresso" id="rewards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-playfair font-bold text-warm-cream mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Rivers Cafe Rewards
            </motion.h2>
            <motion.p 
              className="text-xl text-warm-cream/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join our loyalty program and start earning rewards with every purchase
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    className="w-16 h-16 bg-warm-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-cream/90 transition-colors shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(245, 242, 232, 0.3)"
                    }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatDelay: 2 + index 
                      }}
                    >
                      <IconComponent className="text-deep-espresso" size={24} />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-warm-cream mb-2 group-hover:text-warm-cream/90 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p 
                    className="text-warm-cream/70 text-sm group-hover:text-warm-cream/60 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {benefit.description}
                  </motion.p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="bg-warm-cream text-deep-espresso px-8 py-4 rounded-full text-lg font-semibold hover:bg-warm-cream/90 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-2xl"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(245, 242, 232, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Join Rivers Cafe Rewards Program"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3 
                }}
              >
                <Gift size={20} />
              </motion.div>
              Join Rewards
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced TapMango Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-warm-cream"
            transition={{ duration: 0.3 }}
          >
            {/* Top Bar with Branding */}
            <motion.div 
              className="bg-deep-espresso text-warm-cream p-4 flex justify-between items-center shadow-lg"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Coffee size={24} />
                </motion.div>
                <h1 className="text-xl font-playfair font-bold">Rivers Cafe Rewards</h1>
              </div>
              <motion.button
                onClick={() => setIsModalOpen(false)}
                className="text-warm-cream p-2 hover:bg-warm-cream/10 rounded-full transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close rewards signup"
              >
                <X size={20} />
              </motion.button>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="h-[calc(100vh-72px)] flex flex-col items-center justify-center p-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-center max-w-md">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 1 
                  }}
                >
                  <Gift className="text-deep-espresso mb-6 mx-auto" size={64} />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-playfair font-bold text-deep-espresso mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Join Our Rewards Program
                </motion.h3>
                <motion.p 
                  className="text-deep-espresso/70 mb-8 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Complete your registration with TapMango to start earning points and exclusive rewards.
                </motion.p>
                <motion.button
                  onClick={handleTapMangoOpen}
                  className="bg-deep-espresso text-warm-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-espresso/90 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Gift size={20} />
                  Open TapMango Registration
                </motion.button>
                <motion.p 
                  className="text-xs text-deep-espresso/50 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Opens in a secure popup window
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}