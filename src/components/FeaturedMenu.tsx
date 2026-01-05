"use client"

import { motion } from "framer-motion"
import { Plus, Star } from "lucide-react"

const featuredItems = [
  {
    id: 1,
    name: "Signature Espresso Blend",
    description: "Rich, full-bodied espresso with notes of dark chocolate and caramel",
    price: "$4.50",
    image: "/api/placeholder/300/300",
    rating: 4.9,
    popular: true
  },
  {
    id: 2,
    name: "Cold Brew Concentrate",
    description: "Smooth, concentrated cold brew perfect for any time of day",
    price: "$5.25",
    image: "/api/placeholder/300/300",
    rating: 4.8,
    popular: false
  },
  {
    id: 3,
    name: "Artisan Cappuccino",
    description: "Perfectly steamed milk with our signature espresso blend",
    price: "$5.75",
    image: "/api/placeholder/300/300",
    rating: 4.9,
    popular: true
  },
  {
    id: 4,
    name: "Seasonal Pumpkin Latte",
    description: "Limited time autumn blend with real pumpkin and warming spices",
    price: "$6.25",
    image: "/api/placeholder/300/300",
    rating: 4.7,
    popular: false
  }
]

export default function FeaturedMenu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Featured Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted beverages made with premium beans and artisan techniques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-200 overflow-hidden">
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-amber-900 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-amber-900/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-amber-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">☕</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-900 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-amber-500 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-900">
                    {item.price}
                  </span>
                  <button className="bg-amber-900 text-white p-2 rounded-full hover:bg-amber-800 transition-colors group-hover:scale-110 transform duration-200">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-amber-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View Full Menu & Order
          </button>
          <p className="text-sm text-gray-600 mt-3">
            Order directly for faster service and exclusive rewards
          </p>
        </motion.div>
      </div>
    </section>
  )
}