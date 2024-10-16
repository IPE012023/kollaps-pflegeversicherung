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

Aktueller Repository-Stand:

```bash
git pull -origin
```

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

# Zum Code (bitte Readme.md öffnen, nicht völlständig hier angezeigt)

## Generelles

Das Projekt ist in Komponenten organisiert, die folgende Struktur haben:

Im app-folder liegt die layout.tsx und die page.tsx die die Root-Struktur der App bilden. Der Inhalt der page.tsx wird aufgerufen wenn man die Seite auf "https://kollaps-pflegeversicherung.vercel.app/" bzw. "http://localhost:3000" aufruft. Die drei Ordner enthalten sogennante routes, bspw. gelangt man zum Impressum über http://localhost:3000/impressum bzw. https://kollaps-pflegeversicherung.vercel.app/impressum .

Jeder Route-Folder muss auch eine page.tsx enthalten.

Der Rest der App ist mittels Komponenten organisiert. In jede page.tsx werden einzelne Komponenten geladen, bzw. die Komponente, die die Schuldenuhr darstellt. Auf der page.tsx unter /impressum wird eine *Impressum.tsx*-Komponente geladen, die allen Inhalt des Impressums enthält.

Die einzelnen Komponenten mit den Daten für das Dashboard finden sich ebenfalls im Komponenten Ordner. 

## Anpassung des Dashboards

Ich habe versucht, die Komponenten möglichst aussagekräftig zu benennen.

 - Kopf- und Fußleiste sind *Header.tsx* und *Footer.tsx* (Achtung, diese sind in der app/layout.tsx eigebunden, da sie jeweils unten bzw. oben in der gesamten App auf jedem Route sichtbar sein sollen.)
 - Die Schuldenuhr wird in *DeficitClock.tsx* gebaut. Änderung am Aussehen oder der Logik dahinter sind dann hier vorzunehmen.
 - *DataDashboard.tsx* enhält die unteren beiden Bar-Charts, die jeweiligen Daten dazu befinden sich im data-Ordner.
 - Der Call-To-Action, also das Zitat und Bild von Philipp Mauch sind in der *CallToAction.tsx*-Komponente angesiedelt.
 - Die kleinen Fact-Container befinden sich unter *HealthCareFactCards.tsx*, Daten ebenfalls wieder im data-Ordnre.
 - Die mittleren Charts bzw. der Doughnut-Chart sind in *HealthCareYearComparison.tsx* und (wird aus dieser Komponente aufgerufen) *CareByDegreeChart.tsx* (der Doughnut-Chart)

## Speicherort der Bilder

Bilder liegen im **public**-Ordner des root-Verzeichnisses.

## UI Library

Die Vorlagen für die Grafik-Komponenten kommen von [ShadCN](https://ui.shadcn.com/charts). Zum Austausch einer Grafik,
etwa um einen Barchart gegen einen Linechart zu tauschen die Komponente auswählen, Code kopieren und zusammen mit dem existierenden Code in ChatGPT zum Umbau geben.

## Meta Data

Die *Layout.tsx* und die einzelnen route-Pages enthalten zusammen mit der Datei in utils/const-metadata.ts umfangreiche Metadaten-Infos und Links zu Bildern, die beim Teilen des/der Page-Links in Sozialen Netzwerken angezeigt werden. Für Feinheiten bitte hier nachlesen: [Twitter Card](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)