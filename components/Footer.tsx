import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0 text-center md:text-left">
          © 2024 Werter GmbH. Alle Rechte vorbehalten.
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4">
          <Link href="/kontakt" className="text-sm font-medium hover:text-primary py-2">
            Kontakt
          </Link>
          <Link href="/datenschutz" className="text-sm font-medium hover:text-primary py-2">
            Datenschutz
          </Link>
          <Link href="/impressum" className="text-sm font-medium hover:text-primary py-2">
            Impressum
          </Link>
        </nav>
      </div>
    </footer>
  )
}
