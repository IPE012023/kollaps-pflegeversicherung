import Image from 'next/image'

export default function CallToActionQuote() {
  return (
    <div className="my-12 p-10 rounded-lg shadow-lg container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 border-4 border-gray-800 max-w-full">
      {/* Image container */}
      <div className="flex-shrink-0 md:w-[250px] md:h-[250px]">
        <Image
          src="/mauch.jpeg"
          alt="Dr. Philipp Mauch"
          width={250}
          height={250}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      {/* Quote container */}
      <div className="text-center md:text-left flex-grow">
        <blockquote className="text-xl md:text-2xl font-semibold italic leading-relaxed">
          &quot;Die Finanzierung der Sozialversicherungen ist leider ein Randthema - aber zugleich eine tickende Zeitbombe: Denn die finanziellen Dimensionen sind enorm und die Konsequenzen von Einschnitten für Bürgerinnen und Bürger deutlich spürbar. Verständlich, dass hier niemand ins politische Risiko gehen und Herausforderungen offen ansprechen will. Aber spätestens die nächste Bundesregierung wird sich mit diesem Thema offen und ehrlich auseinandersetzen müssen.&quot;
        </blockquote>
        <p className="mt-6 text-lg font-medium">– Dr. Philipp Mauch, <span className='italic'>Managing Partner bei Pivot Regulatory und Werter GmbH</span></p>
      </div>
    </div>
  );
}
