"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DeficitClock({ initialDeficit = -1500000000, decayRate = 100000 }) {
  const [deficit, setDeficit] = useState(initialDeficit)
  const [isRunning, setIsRunning] = useState(true) // Start the clock by default
  const [customDecayRate, setCustomDecayRate] = useState(decayRate)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setDeficit(prevDeficit => prevDeficit - customDecayRate) // Subtract customDecayRate directly
      }, 1000) // Every second
    }

    return () => clearInterval(interval)
  }, [isRunning, customDecayRate])

  const handleDecayRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numberValue = Number(value)

    if (value === "" || isNaN(numberValue) || numberValue < 0) {
      // Ignore invalid input (such as negative numbers or non-numeric values)
      setCustomDecayRate(0)
    } else {
      setCustomDecayRate(numberValue)
    }
  }

  const formatDeficit = (value: number) => {
    const formatted = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.abs(value))
    return formatted.replace(/\s/g, '\u00A0') // Replace spaces with non-breaking spaces
  }

  const [billions, millions, thousands] = formatDeficit(deficit).split(/[,.:]/)

  return (
    <Card className="w-full max-w-2xl mx-auto bg-black p-4 rounded-lg shadow-lg">
      <CardContent>
        <div className="bg-gray-900 p-4 rounded-md mb-4">
          <div className="flex justify-center items-center space-x-2 font-mono text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-red-500">
            <div className="relative">
              <span className="absolute inset-0 text-gray-800 z-0">88</span>
              <span className="relative z-10">{billions}</span>
            </div>
            <span>.</span>
            <div className="relative">
              <span className="absolute inset-0 text-gray-800 z-0">888</span>
              <span className="relative z-10">{millions}</span>
            </div>
            <span>.</span>
            <div className="relative">
              <span className="absolute inset-0 text-gray-800 z-0">888</span>
              <span className="relative z-10">{thousands}</span>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-2">Defizit der Gesetzlichen Pflegevresicherung bis 2025 (in 1000 €)</div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <Button 
            onClick={() => setIsRunning(!isRunning)} 
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white rounded-full"
          >
            {isRunning ? 'Stop' : 'Start'}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setDeficit(initialDeficit)} 
            className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white rounded-full"
          >
            Zurücksetzen
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
          <Label htmlFor="decay-rate" className="w-full sm:w-auto text-gray-300">Anstieg (€/s):</Label>
          <Input
            id="decay-rate"
            type="number"
            value={customDecayRate}
            onChange={handleDecayRateChange}
            className="w-full sm:w-24 bg-gray-800 text-white border-gray-700 rounded-md"
            min="0" // Ensure non-negative values in the input
          />
        </div>
      </CardContent>
    </Card>
  )
}
