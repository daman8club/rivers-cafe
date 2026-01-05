"use client"

import { useState } from "react"
import ProductCard from "@/components/ProductCard"
import { motion, AnimatePresence } from "framer-motion"
import { X, Star, Crown } from "lucide-react"

// Move products outside component to prevent recreation on every render
const products = [
  {
    id: 1,
    name: "El Salvador Volcanic Blend",
    description: "Rich, full-bodied coffee with notes of dark chocolate and caramel from volcanic soil",
    price: 24.99,
    memberPrice: 19.99,
    rating: 4.9
  },
  {
    id: 2,
    name: "Premium Cold Brew",
    description: "Smooth, concentrated cold brew perfect for any time of day",
    price: 18.99,
    memberPrice: 15.99,
    rating: 4.8
  },
  {
    id: 3,
    name: "Artisan Espresso",
    description: "Perfectly roasted espresso beans for the ultimate coffee experience",
    price: 29.99,
    memberPrice: 24.99,
    rating: 4.9
  },
  {
    id: 4,
    name: "Seasonal Blend",
    description: "Limited time seasonal blend with unique flavor profiles",
    price: 22.99,
    memberPrice: 18.99,
    rating: 4.7
  }
]

export default function ShopPage() {
  const [isLoyaltyModalOpen, setIsLoyaltyModalOpen] = useState(false)
  const [cart, setCart] = useState<Array<{id: string, isSubscription: boolean}>>([])

  const handleAddToCart = (productId: string, isSubscription: boolean) => {
    setCart(prev => [...prev, { id: productId, isSubscription }])
    // Here you would typically integrate with a cart context or state management
    console.log(`Added ${productId} to cart (subscription: ${isSubscription})`)
  }

  return (
    <>
      <div className="min-h-screen pt-16 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-deep-espresso mb-4">
              Premium Coffee Collection
            </h1>
            <p className="text-xl text-deep-espresso/70 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium coffee beans
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  memberPrice={product.memberPrice}
                  rating={product.rating}
                  onLoyaltyClick={() => setIsLoyaltyModalOpen(true)}
                  onAddToCart={handleAddToCart}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Loyalty Modal */}
      <AnimatePresence>
        {isLoyaltyModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoyaltyModalOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-warm-cream rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <motion.h2 
                    className="text-2xl font-playfair font-bold text-deep-espresso flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Crown className="text-deep-espresso" size={24} />
                    Loyalty Program
                  </motion.h2>
                  <motion.button
                    onClick={() => setIsLoyaltyModalOpen(false)}
                    className="text-deep-espresso p-2 hover:bg-deep-espresso/10 rounded-full transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close loyalty program modal"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="bg-deep-espresso text-warm-cream p-4 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="text-warm-cream" size={20} />
                      </motion.div>
                      <span className="font-semibold">Member Benefits</span>
                    </div>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>• 20% off all products</li>
                      <li>• Free shipping on orders $50+</li>
                      <li>• Early access to new blends</li>
                      <li>• Birthday rewards</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-deep-espresso/70 mb-4">
                      Join our loyalty program to unlock exclusive member pricing and rewards.
                    </p>
                    <motion.button 
                      className="w-full bg-deep-espresso text-warm-cream py-3 rounded-full font-semibold hover:bg-deep-espresso/90 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Join Loyalty Program
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}