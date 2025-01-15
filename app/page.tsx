import DeficitClock from '../components/DeficitClock'
import DataDashboard from '../components/DataDashboard'
import HealthcareFactCards from '@/components/HealthCareFactCards'
import HealthcareYearComparison from '@/components/HealthCareYearComparison'
import CallToActionQuote from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Kollaps des deutschen Sozialversicherungssystems verhindern!</h1>
      <div className="mb-8">
        <DeficitClock />
      </div>
      <CallToActionQuote />
      <div className="mb-8">
        <HealthcareFactCards />
      </div>
      <div className="mb-8">
        <HealthcareYearComparison />
      </div>
      <DataDashboard />
    </main>
  )
}