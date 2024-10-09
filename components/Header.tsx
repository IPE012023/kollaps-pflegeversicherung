import Link from 'next/link'
import { SwitchTheme } from './SwitchTheme'

export default function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold">
          Pflegeversicherung Reform
        </Link>
        <div className="flex items-center">
          <SwitchTheme />
        </div>
      </div>
    </header>
  )
}