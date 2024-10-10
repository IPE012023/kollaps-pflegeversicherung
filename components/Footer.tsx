"use client"

import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import KontaktContent from "./Kontakt"
import DatenschutzContent from "./Datenschutz"
import ImpressumContent from "./Impressum"

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0 text-center md:text-left">
          © 2024 Pflegeversicherung Reform. Alle Rechte vorbehalten.
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4">
          <Drawer>
            <DrawerTrigger asChild>
              <button className="text-sm font-medium hover:text-primary py-2">Kontakt</button>
            </DrawerTrigger>
            <DrawerContent className="h-[85vh] overflow-y-auto">
              <div className="p-4 sm:p-6 relative">
                <DrawerClose className="absolute top-2 right-2">
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Schließen</span>
                  </Button>
                </DrawerClose>
                <KontaktContent />
              </div>
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger asChild>
              <button className="text-sm font-medium hover:text-primary py-2">Datenschutz</button>
            </DrawerTrigger>
            <DrawerContent className="h-[85vh] overflow-y-auto">
              <div className="p-4 sm:p-6 relative">
                <DrawerClose className="absolute top-2 right-2">
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Schließen</span>
                  </Button>
                </DrawerClose>
                <DatenschutzContent />
              </div>
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger asChild>
              <button className="text-sm font-medium hover:text-primary py-2">Impressum</button>
            </DrawerTrigger>
            <DrawerContent className="h-[85vh] overflow-y-auto">
              <div className="p-4 sm:p-6 relative">
                <DrawerClose className="absolute top-2 right-2">
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Schließen</span>
                  </Button>
                </DrawerClose>
                <ImpressumContent />
              </div>
            </DrawerContent>
          </Drawer>
        </nav>
      </div>
    </footer>
  )
}