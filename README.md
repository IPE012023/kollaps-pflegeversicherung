# Anleitung zum Weiterentwicklen

## Installation NPM (falls nicht erfolgt)

Im Windows-CMD folgenden Befehl ausführen

```bash
npm install -g npm
```

## Klonen des Projects von Github

Per CMD an die Stelle navigieren, an der der Code gespeichert werden soll (Off-OneDrive!)

```bash
cd "C:\Users\BENUTZER\Documents"

git clone https://github.com/IPE012023/kollaps-pflegeversicherung.git
```

## Ausführen in VSCode (beim ersten Start)
VSCode öffnen, und den Ordner "kollaps-pflegeversicherung" öffnen.
Bei erstmaligen Starten folgenden Befehl ausführen:

```bash
npm install
```

## Zum Starten der App

```bash
npm run dev
```

startet eine lokale Entwicklungsumgebung der Seite auf [http://localhost:3000](http://localhost:3000).


## Repository

Das Repository liegt unter [Repository](https://github.com/IPE012023/kollaps-pflegeversicherung)

Änderungen wie gewohnt hinzufügen und committen mit
```bash
git add .
git commit -m "Message"
```
dann (wenn keine Fehler/rote Warnings in irgendwelchen Files sind)

```bash
git push -origin
```

## Deployment

Die Seite ist aktuell über Vercel deployed, deployment erfolgt für gewöhnlich automatisch nach Veröffentlichung bei Github.

Achtung: Enthält der Code Fehler, scheitert das Deployment. Daher immer bevor 

auf remote gepusht wird:

```bash
npm run build
```

laufen lassen. Gibt es hier Fehler oder Type-Warnings müssen diese zuerst (am besten mit ChatGPT) beseitigt werden.

Falls doch auf Vercel zugegriffen werden muss:

Die Zugangsdaten sind mein (Inés) Github-Username:

    IPE012023 und das PW: Ipe_2023!

Selbiges wird auch benötigt, falls ihr Euch bei Vercel/Github einloggen wollt. Falls Ihr einen 2FA-Code braucht: 110894

# Zum Code

## Generelles

Das Projekt ist in Komponenten organisiert, die folgende Struktur haben:

Im app-folder liegt die layout.tsx und die page.tsx die die Root-Struktur der App bilden. Der Inhalt der page.tsx wird aufgerufen wenn man die Seite auf "https://kollaps-pflegeversicherung.vercel.app/" bzw. "http://localhost:3000" aufruft. Die drei Ordner enthalten sogennante routes, bspw. gelangt man zum Impressum über http://localhost:3000/impressum bzw. https://kollaps-pflegeversicherung.vercel.app/impressum .

Jeder Route-Folder muss auch eine page.tsx enthalten.

Der Rest der App ist mittels Komponenten organisiert. In jede page.tsx werden einzelne Komponenten geladen, bzw. die Komponente, die die Schuldenuhr darstellt.

Die einzelnen Komponenten mit den Daten für das Dashboard finden sich ebenfalls im Komponenten Ordner. 



