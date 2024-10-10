"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DeficitClock({ initialDeficit = -1500000000, decayRate = 100000 }) {
  const [deficit, setDeficit] = useState(initialDeficit)
  const [isRunning, setIsRunning] = useState(true)
  const [customDecayRate, setCustomDecayRate] = useState(decayRate)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setDeficit(prevDeficit => prevDeficit - customDecayRate)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, customDecayRate])

  const handleDecayRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numberValue = Number(value)

    if (value === "" || isNaN(numberValue) || numberValue < 0) {
      setCustomDecayRate(0)
    } else {
      setCustomDecayRate(numberValue)
    }
  }

  const formatDeficit = (value: number) => {
    const formatted = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.abs(value))
    return formatted.replace(/\s/g, '\u00A0')
  }

  const [billions, millions, thousands] = formatDeficit(deficit).split(/[,.:]/)

  return (
    <Card className="w-full max-w-2xl mx-auto bg-black p-4 rounded-lg shadow-lg border-4 border-gray-700">
      <CardContent className="p-0">
        <div className="bg-[#000000] p-4 rounded-md mb-4 border-8 border-gray-800">
          <div className="flex justify-center items-center space-x-2 font-mono text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#ff0000] font-bold" style={{ textShadow: '0 0 10px #ff0000' }}>
            <div className="relative bg-[#220000] px-2 py-1 rounded">
              <span className="relative z-10">{billions}</span>
            </div>
            <span className="text-[#ff0000]">.</span>
            <div className="relative bg-[#220000] px-2 py-1 rounded">
              <span className="relative z-10">{millions}</span>
            </div>
            <span className="text-[#ff0000]">.</span>
            <div className="relative bg-[#220000] px-2 py-1 rounded">
              <span className="relative z-10">{thousands}</span>
            </div>
          </div>
          <div className="text-center text-[#ff6666]">Defizit der Gesetzlichen Pflegevresicherung bis 2025 (in 1000 €)</div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <Button 
            onClick={() => setIsRunning(!isRunning)} 
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg"
          >
            {isRunning ? 'Stop' : 'Start'}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setDeficit(initialDeficit)} 
            className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white rounded-full font-bold text-lg"
          >
            Zurücksetzen
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
          <Label htmlFor="decay-rate" className="w-full sm:w-auto text-[#ff6666] font-bold">Anstieg (€/s):</Label>
          <Input
            id="decay-rate"
            type="number"
            value={customDecayRate}
            onChange={handleDecayRateChange}
            className="w-full sm:w-24 bg-gray-800 text-[#ff0000] border-gray-700 rounded-md font-digital text-lg"
            min="0"
          />
        </div>
      </CardContent>
    </Card>
  )
}