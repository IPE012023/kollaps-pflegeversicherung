import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          © 2024 Pflegeversicherung Reform. Alle Rechte vorbehalten.
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Kontakt
          </Link>
          <Link href="/privacy" className="text-sm font-medium hover:text-primary">
            Datenschutz
          </Link>
          <Link href="/imprint" className="text-sm font-medium hover:text-primary">
            Impressum
          </Link>
          <Link href="/terms" className="text-sm font-medium hover:text-primary">
            AGB
          </Link>
        </nav>
      </div>
    </footer>
  )
}