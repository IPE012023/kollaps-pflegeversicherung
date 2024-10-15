import Impressum from '@/components/Impressum'
import { baseMetadata } from '@/utils/const-metadata';

export const metadata = {
  ...baseMetadata,
  title: "Impressum - Pflegeversicherung Reform",
  description: "Impressum und rechtliche Hinweise für die Pflegeversicherung Reform.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Impressum - Pflegeversicherung Reform",
    description: "Alle rechtlichen Hinweise zur Pflegeversicherung Reform.",
    url: "https://kollaps-pflegeversicherung.vercel.app/impressum",
    images: [
      {
        url: "https://kollaps-pflegeversicherung.vercel.app/images/impressum.jpg",
        width: 800,
        height: 600,
        alt: "Impressum Pflegeversicherung",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Impressum - Pflegeversicherung Reform",
    description: "Rechtliche Hinweise für die Pflegeversicherung Reform.",
    images: ["https://kollaps-pflegeversicherung.vercel.app/images/twitter-impressum.jpg"],
  },
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto py-12">
      <Impressum />
    </div>
  )
}
