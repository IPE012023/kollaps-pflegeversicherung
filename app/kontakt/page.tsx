import Kontakt from '@/components/Kontakt'
import { baseMetadata } from '@/utils/const-metadata';

export const metadata = {
  ...baseMetadata,
  title: "Kontakt - Pflegeversicherung Reform",
  description: "Kontaktieren Sie uns für Fragen zur Pflegeversicherung Reform.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Kontakt - Pflegeversicherung Reform",
    description: "Treten Sie mit uns in Kontakt und stellen Sie Ihre Fragen zur Pflegeversicherung Reform.",
    url: "https://kollaps-pflegeversicherung.vercel.app/kontakt",
    images: [
      {
        url: "https://kollaps-pflegeversicherung.vercel.app/images/kontakt.png",
        width: 800,
        height: 600,
        alt: "Kontakt Pflegeversicherung",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Kontakt - Pflegeversicherung Reform",
    description: "Kontaktieren Sie uns, um mehr über die Pflegeversicherung Reform zu erfahren.",
    images: ["https://kollaps-pflegeversicherung.vercel.app/images/kontakt.png"],
  },
};

export default function KontaktPage() {
  return (
    <div className="container mx-auto py-12">
      <Kontakt />
    </div>
  )
}
