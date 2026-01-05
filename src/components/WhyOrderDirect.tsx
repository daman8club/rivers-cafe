"use client"

import { motion } from "framer-motion"
import { Clock, DollarSign, Gift, Shield, Smartphone, Users } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Faster Pickup",
    description: "Skip the third-party delays. Your order goes straight to our baristas for 5-minute pickup times.",
    highlight: "5x faster than delivery apps"
  },
  {
    icon: DollarSign,
    title: "No Hidden Fees",
    description: "Pay menu price only. No delivery fees, service charges, or inflated prices like other platforms.",
    highlight: "Save $3-5 per order"
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn points on every purchase, get birthday treats, and access member-only seasonal drinks.",
    highlight: "Free drink after 10 purchases"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Direct communication with our team ensures your order is perfect every time.",
    highlight: "100% satisfaction guaranteed"
  },
  {
    icon: Smartphone,
    title: "Easy Reordering",
    description: "Save your favorites and reorder with one tap. No need to browse through multiple apps.",
    highlight: "One-tap reorder"
  },
  {
    icon: Users,
    title: "Personal Service",
    description: "Our baristas know your preferences and can customize your drink exactly how you like it.",
    highlight: "Personalized experience"
  }
]

export default function WhyOrderDirect() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Why Order Direct?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skip Uber Eats, DoorDash, and other apps. Get better service, better prices, and better rewards when you order directly from Rivers Cafe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6 group-hover:bg-amber-200 transition-colors">
                  <IconComponent className="text-amber-900" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {benefit.highlight}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of coffee lovers who've switched from delivery apps to our direct ordering system for a better experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Order
            </button>
            <button className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 hover:text-white transition-all duration-300">
              Download Our App
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}