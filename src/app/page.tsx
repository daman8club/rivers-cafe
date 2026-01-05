import RiversCafeComplete from "@/components/RiversCafeComplete"
import ShopSection from "@/components/ShopSection"
import VisitUs from "@/components/VisitUs"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <RiversCafeComplete />
      <ShopSection />
      <VisitUs />
      <Footer />
    </div>
  )
}
