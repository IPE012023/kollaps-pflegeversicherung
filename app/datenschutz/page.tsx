import Datenschutz from '@/components/Datenschutz'
import { baseMetadata } from '@/utils/const-metadata';

export const metadata = {
  ...baseMetadata,
  title: "Datenschutz - Pflegeversicherung Reform",
  description: "Datenschutz und rechtliche Hinweise für die Pflegeversicherung Reform.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Datenschutz - Pflegeversicherung Reform",
    description: "Alle rechtlichen Hinweise zur Seite Reform Pflegeversicherung.",
    url: "https://kollaps-pflegeversicherung.vercel.app/datenschutz",
    images: [
      {
        url: "https://kollaps-pflegeversicherung.vercel.app/werter.png",
        width: 778,
        height: 318,
        alt: "Datenschutz Reform Pflegeversicherung",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Datenschutz - Pflegeversicherung Reform",
    description: "Rechtliche Hinweise für die Pflegeversicherung Reform.",
    images: ["https://kollaps-pflegeversicherung.vercel.app/werter.png"],
  },
};

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto py-12">
      <Datenschutz />
    </div>
  )
}
