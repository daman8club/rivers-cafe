"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    'nav.shop': 'Shop',
    'nav.story': 'Our Story',
    'nav.cart': 'Cart',
    'hero.title1': "From El Salvador's",
    'hero.title2': 'Volcanic Soil',
    'hero.title3': 'to Your Cup',
    'hero.description': 'Experience the rich, complex flavors of premium coffee beans grown in the mineral-rich volcanic soil of El Salvador.',
    'hero.orderDelivery': 'Order Delivery',
    'modal.title': 'Order Delivery',
    'modal.description': 'Choose your preferred delivery platform:',
    'modal.uberEats': 'Order on Uber Eats',
    'modal.doorDash': 'Order on DoorDash',
    'close': 'Close'
  },
  es: {
    'nav.shop': 'Tienda',
    'nav.story': 'Nuestra Historia',
    'nav.cart': 'Carrito',
    'hero.title1': 'Desde el Suelo',
    'hero.title2': 'Volcánico de El Salvador',
    'hero.title3': 'hasta tu Taza',
    'hero.description': 'Experimenta los sabores ricos y complejos de granos de café premium cultivados en el suelo volcánico rico en minerales de El Salvador.',
    'hero.orderDelivery': 'Pedir Entrega',
    'modal.title': 'Pedir Entrega',
    'modal.description': 'Elige tu plataforma de entrega preferida:',
    'modal.uberEats': 'Pedir en Uber Eats',
    'modal.doorDash': 'Pedir en DoorDash',
    'close': 'Cerrar'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}