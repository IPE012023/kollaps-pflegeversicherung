import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export default function Kontakt() {
  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-0">
      <h2 className="text-3xl font-bold mb-10 text-center lg:text-left">Kontakt</h2>
      <div className="flex flex-col lg:flex-row lg:gap-12 gap-8">
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
          {/* Profile picture next to address */}
          <Image
            src="/mauch.jpeg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-lg w-full max-w-[300px] h-auto mb-4"
          />
          <address className="mt-4 not-italic text-center lg:text-left leading-relaxed">
            <p className='font-semibold'>Dr. Philipp Mauch</p>
            Werter GmbH<br />
            Sonnenstr. 19 – Eingang 1<br />
            80331 München<br />
            Deutschland<br />
            Tel: +49. 89. 748486-50
          </address>
        </div>

        {/* Wrapped Logos in a Card */}
        <div className="lg:w-2/3">
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Unser Kooperationsteam</h3>
          <Card className="bg-white dark:bg-grey-300 shadow-md">
            <CardContent className="flex justify-around items-center lg:gap-12 gap-6 p-6">
              {/* Partner 1 with Werther Logo */}
              <Link href="https://werther.com" target="_blank">
                <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 ease-in-out hover:animate-jiggle">
                  <Image
                    src="/werter.png"
                    alt="Werter Logo"
                    width={200}
                    height={100}
                    className="mb-2 w-full h-auto max-w-[200px]"
                  />
                </div>
              </Link>

              {/* Partner 2 with Pivot Logo */}
              <Link href="https://pivot.re" target="_blank">
                <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 ease-in-out hover:animate-jiggle">
                  <Image
                    src="/pivot.svg"
                    alt="Pivot Logo"
                    width={200}
                    height={100}
                    className="mb-2 w-full h-auto max-w-[200px]"
                  />
                </div>
              </Link>

              {/* Partner 3 with IPE Logo */}
              <Link href="https://ipe-evaluation.de" target="_blank">
                <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 ease-in-out hover:animate-jiggle">
                  <Image
                    src="/ipe.png"
                    alt="IPE Logo"
                    width={200}
                    height={100}
                    className="mb-2 w-full h-auto max-w-[200px]"
                  />
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
