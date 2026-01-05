"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"

const locations = [
  {
    id: 1,
    name: "Manhattan Flagship",
    address: "123 Broadway, New York, NY 10001",
    phone: "(212) 555-0123",
    hours: "Mon-Fri: 6AM-8PM, Sat-Sun: 7AM-9PM",
    features: ["Drive-thru", "WiFi", "Outdoor Seating"]
  },
  {
    id: 2,
    name: "Brooklyn Heights",
    address: "456 Court St, Brooklyn, NY 11201",
    phone: "(718) 555-0456",
    hours: "Mon-Fri: 6:30AM-7PM, Sat-Sun: 7AM-8PM",
    features: ["WiFi", "Study Area", "Pet Friendly"]
  },
  {
    id: 3,
    name: "Queens Plaza",
    address: "789 Northern Blvd, Queens, NY 11101",
    phone: "(718) 555-0789",
    hours: "Mon-Sun: 6AM-9PM",
    features: ["24/7 Pickup", "WiFi", "Meeting Rooms"]
  }
]

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our three NYC locations for the full Rivers Cafe experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {location.name}
                </h3>
                <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Navigation className="text-amber-900 mt-1" size={16} />
                  <div>
                    <p className="text-gray-900 font-medium">Address</p>
                    <p className="text-gray-600 text-sm">{location.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-amber-900 mt-1" size={16} />
                  <div>
                    <p className="text-gray-900 font-medium">Phone</p>
                    <p className="text-gray-600 text-sm">{location.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-amber-900 mt-1" size={16} />
                  <div>
                    <p className="text-gray-900 font-medium">Hours</p>
                    <p className="text-gray-600 text-sm">{location.hours}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-200">
                  <p className="text-gray-900 font-medium mb-2">Features</p>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-amber-900 text-white py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors mt-6">
                  Order for Pickup
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 hover:text-white transition-all duration-300">
            View All Locations on Map
          </button>
        </motion.div>
      </div>
    </section>
  )
}