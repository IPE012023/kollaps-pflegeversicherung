import Image from 'next/image'

export default function Kontakt() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Kontakt</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-lg w-full max-w-[300px] h-auto mb-4"
          />
          <address className="mt-4 not-italic text-center lg:text-left">
            Pflegeversicherung Reform<br />
            Musterstraße 123<br />
            12345 Berlin<br />
            Deutschland<br />
            <a href="mailto:info@pflegereform.de" className="text-primary hover:underline">info@pflegereform.de</a>
          </address>
        </div>
        <div className="lg:w-2/3">
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Unsere Kooperationspartner</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Partner 1', 'Partner 2', 'Partner 3'].map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={`/placeholder.svg?height=100&width=200&text=${partner}`}
                  alt={partner}
                  width={200}
                  height={100}
                  className="mb-2 w-full h-auto max-w-[200px]"
                />
                <span className="text-sm font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}