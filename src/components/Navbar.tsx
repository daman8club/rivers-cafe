"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart, Coffee, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

const navItems = [
  { name: "nav.shop", href: "/shop" },
  { name: "nav.story", href: "/story" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(3)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 backdrop-blur-md border-b border-orange-500/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <h1 className="text-2xl font-playfair font-bold text-white flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  className="text-yellow-300"
                >
                  <Coffee size={28} />
                </motion.div>
                Rivers Cafe
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-yellow-300 font-medium transition-all duration-300 relative px-3 py-2 rounded-lg hover:bg-white/10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {t(item.name)}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
              
              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={16} />
                <span className="text-sm font-bold">{language.toUpperCase()}</span>
              </motion.button>
              
              {/* Cart Button */}
              <motion.button 
                className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart size={18} />
                {t('nav.cart')}
                {cartCount > 0 && (
                  <motion.span
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Mobile Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className="text-white p-2 bg-white/10 rounded-full"
                whileTap={{ scale: 0.9 }}
              >
                <Globe size={20} />
              </motion.button>
              
              {/* Mobile Cart */}
              <motion.button
                className="relative text-white p-2"
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </motion.button>
              
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 border-t border-orange-500/30"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-white font-medium hover:text-yellow-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.name)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </>
  )
}