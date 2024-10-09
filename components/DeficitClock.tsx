"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DeficitClock({ initialDeficit = -1000000000, decayRate = 100 }) {
  const [deficit, setDeficit] = useState(initialDeficit)
  const [isRunning, setIsRunning] = useState(false)
  const [customDecayRate, setCustomDecayRate] = useState(decayRate)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setDeficit(prevDeficit => prevDeficit - customDecayRate / 1000)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, customDecayRate])

  const formatDeficit = (value: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">German Social Security Deficit</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl md:text-4xl font-bold text-center mb-4">
          {formatDeficit(deficit)}
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <Button onClick={() => setIsRunning(!isRunning)} className="w-full sm:w-auto">
            {isRunning ? 'Stop' : 'Start'}
          </Button>
          <Button variant="outline" onClick={() => setDeficit(initialDeficit)} className="w-full sm:w-auto">Reset</Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <Label htmlFor="decay-rate" className="w-full sm:w-auto">Decay Rate (€/s):</Label>
          <Input
            id="decay-rate"
            type="number"
            value={customDecayRate}
            onChange={(e) => setCustomDecayRate(Number(e.target.value))}
            className="w-full sm:w-24"
          />
        </div>
      </CardContent>
    </Card>
  )
}