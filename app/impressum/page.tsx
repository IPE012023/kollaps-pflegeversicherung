import Impressum from '@/components/Impressum'
import { baseMetadata } from '@/utils/const-metadata';

export const metadata = {
  ...baseMetadata,
  title: "Impressum - Pflegeversicherung Reform",
  description: "Impressum und rechtliche Hinweise für die Pflegeversicherung Reform.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Impressum - Pflegeversicherung Reform",
    description: "Alle rechtlichen Hinweise zur Seite Reform Pflegeversicherung.",
    url: "https://kollaps-pflegeversicherung.vercel.app/impressum",
    images: [
      {
        url: "https://kollaps-pflegeversicherung.vercel.app/werter.png",
        width: 778,
        height: 318,
        alt: "Impressum Reform Pflegeversicherung",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Impressum - Pflegeversicherung Reform",
    description: "Rechtliche Hinweise für die Pflegeversicherung Reform.",
    images: ["https://kollaps-pflegeversicherung.vercel.app/werter.png"],
  },
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto py-12">
      <Impressum />
    </div>
  )
}
