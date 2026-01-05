"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Star, Crown } from "lucide-react"

interface ProductCardProps {
  name: string
  description: string
  price: number
  memberPrice: number
  rating: number
  subscriptionDiscount?: number
  onLoyaltyClick: () => void
  onAddToCart: (productId: string, isSubscription: boolean) => void
}

export default function ProductCard({
  name,
  description,
  price,
  memberPrice,
  rating,
  subscriptionDiscount = 0.15,
  onLoyaltyClick,
  onAddToCart
}: ProductCardProps) {
  const [isSubscription, setIsSubscription] = useState(false)
  
  const subscriptionPrice = price * (1 - subscriptionDiscount)
  const currentPrice = isSubscription ? subscriptionPrice : price
  const discountPercentage = Math.round(subscriptionDiscount * 100)

  const handleAddToCart = () => {
    onAddToCart(name.toLowerCase().replace(/\s+/g, '-'), isSubscription)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-warm-cream border border-deep-espresso/20 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
    >
      {/* Discount Badge */}
      {isSubscription && (
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -12 }}
          className="absolute -top-2 -right-2 bg-deep-espresso text-warm-cream px-3 py-1 rounded-full text-xs font-bold z-10"
        >
          {discountPercentage}% OFF
        </motion.div>
      )}

      {/* Product Image */}
      <motion.div 
        className="w-full h-32 sm:h-40 bg-gradient-to-br from-deep-espresso/20 to-deep-espresso/40 rounded-xl mb-4 flex items-center justify-center group-hover:from-deep-espresso/30 group-hover:to-deep-espresso/50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div 
          className="text-3xl sm:text-4xl"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          ☕
        </motion.div>
      </motion.div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-semibold text-deep-espresso line-clamp-1">
            {name}
          </h3>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-deep-espresso fill-current" />
            <span className="text-sm text-deep-espresso/70">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-deep-espresso/70 line-clamp-2">
          {description}
        </p>

        {/* Purchase Type Toggle */}
        <div className="bg-deep-espresso/10 rounded-lg p-1 flex">
          <motion.button
            onClick={() => setIsSubscription(false)}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
              !isSubscription
                ? "bg-deep-espresso text-warm-cream shadow-md"
                : "text-deep-espresso hover:bg-deep-espresso/10"
            }`}
          >
            One-time
          </motion.button>
          <motion.button
            onClick={() => setIsSubscription(true)}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
              isSubscription
                ? "bg-deep-espresso text-warm-cream shadow-md"
                : "text-deep-espresso hover:bg-deep-espresso/10"
            }`}
          >
            Monthly
          </motion.button>
        </div>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <motion.span 
                  key={currentPrice}
                  initial={{ scale: 1.2, color: "#2B1B17" }}
                  animate={{ scale: 1, color: "#2B1B17" }}
                  className="text-xl sm:text-2xl font-bold text-deep-espresso"
                >
                  ${currentPrice.toFixed(2)}
                </motion.span>
                {isSubscription && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-deep-espresso/50 line-through"
                  >
                    ${price.toFixed(2)}
                  </motion.span>
                )}
              </div>
              {isSubscription && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-deep-espresso/70"
                >
                  per month
                </motion.span>
              )}
            </div>
          </div>

          {/* Member Price */}
          <motion.button
            onClick={onLoyaltyClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 text-xs text-deep-espresso/70 hover:text-deep-espresso transition-colors"
          >
            <Crown size={12} />
            <span>Member price: ${memberPrice.toFixed(2)}</span>
          </motion.button>
        </div>

        {/* Add to Cart Button */}
        <motion.button 
          onClick={handleAddToCart}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-deep-espresso text-warm-cream py-3 rounded-full font-semibold hover:bg-deep-espresso/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          aria-label={`Add ${name} to cart`}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <ShoppingCart size={16} />
          </motion.div>
          <span className="text-sm sm:text-base">Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  )
}