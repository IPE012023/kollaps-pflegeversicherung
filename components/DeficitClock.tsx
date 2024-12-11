"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DeficitClock({ initialDeficit = 0, increaseRate = 1955.155, increaseRateGKV = 101.4019, increaseRateGPV = 47.5321, increaseRateGRV = 1511.5219, increaseRateGAV = 294.6992}) {
  const [deficit, setDeficit] = useState(initialDeficit)
  const [isRunning, setIsRunning] = useState(false)
  const [customIncreaseRate, setCustomIncreaseRate] = useState(increaseRate)
  const [deficitGKV, setDeficitGKV] = useState(initialDeficit)
  const [customIncreaseRateGKV, setCustomIncreaseRateGKV] = useState(increaseRateGKV)
  const [deficitGPV, setDeficitGPV] = useState(initialDeficit)
  const [customIncreaseRateGPV, setCustomIncreaseRateGPV] = useState(increaseRateGPV)
  const [deficitGRV, setDeficitGRV] = useState(initialDeficit)
  const [customIncreaseRateGRV, setCustomIncreaseRateGRV] = useState(increaseRateGRV)
  const [deficitGAV, setDeficitGAV] = useState(initialDeficit)
  const [customIncreaseRateGAV, setCustomIncreaseRateGAV] = useState(increaseRateGAV)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setDeficit(prevDeficit => prevDeficit + customIncreaseRate),
        setDeficitGKV(prevDeficit => prevDeficit + customIncreaseRateGKV),
        setDeficitGPV(prevDeficit => prevDeficit + customIncreaseRateGPV),
        setDeficitGRV(prevDeficit => prevDeficit + customIncreaseRateGRV),
        setDeficitGAV(prevDeficit => prevDeficit + customIncreaseRateGAV)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, customIncreaseRate])

  const handleIncreaseRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numberValue = Number(value)

    if (value === "" || isNaN(numberValue) || numberValue < 0) {
      setCustomIncreaseRate(0)
    } else {
      setCustomIncreaseRate(numberValue)
    }
  }

  const formatDeficit = (value: number) => {
    const formatted = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.abs(value))
    return formatted.replace(/\s/g, '\u00A0')
  }

  const [billions, millions, thousands] = formatDeficit(deficit).split(/[,.:]/)

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="w-full border-4">
          <CardHeader className="p-4 pb-0">
            <CardTitle>Krankenversicherung (GKV)</CardTitle>
            <CardDescription>
              Jährliches Defizit von 9,3 Mrd.€ (2022)
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
            <div className="bg-[#000000] bottom w-full p-2 rounded-md mb-2 border-4 border-gray-800">
              <div className="flex justify-center items-center space-x-2 font-mono text-xl sm:text-xl md:text-xl lg:text-xl text-[#ff0000] font-bold" style={{ textShadow: '0 0 10px #ff0000' }}>
                <div className="relative bg-[#220000] px-2 py-1 rounded">
                  <span className="relative z-10">{Math.round(deficitGKV).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full border-4">
          <CardHeader className="p-4 pb-0">
            <CardTitle>Pflegeversicherung (GPV)</CardTitle>
            <CardDescription>
              Jährliches Defizit von 47,7 Mrd.€ (2022)
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
            <div className="bg-[#000000] bottom w-full p-2 rounded-md mb-2 border-4 border-gray-800">
              <div className="flex justify-center items-center space-x-2 font-mono text-xl sm:text-xl md:text-xl lg:text-xl text-[#ff0000] font-bold" style={{ textShadow: '0 0 10px #ff0000' }}>
                <div className="relative bg-[#220000] px-2 py-1 rounded">
                  <span className="relative z-10">{Math.round(deficitGPV).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full border-4">
          <CardHeader className="p-4 pb-0">
            <CardTitle>Rentenversicherung (GRV)</CardTitle>
            <CardDescription>
              Jährliches Defizit von 1,5 Mrd.€ (2024)
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
            <div className="bg-[#000000] bottom w-full p-2 rounded-md mb-2 border-4 border-gray-800">
              <div className="flex justify-center items-center space-x-2 font-mono text-xl sm:text-xl md:text-xl lg:text-xl text-[#ff0000] font-bold" style={{ textShadow: '0 0 10px #ff0000' }}>
                <div className="relative bg-[#220000] px-2 py-1 rounded">
                  <span className="relative z-10">{(Math.round(deficitGRV)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full border-4">
          <CardHeader className="p-4 pb-0">
            <CardTitle>Arbeitslosenversicherung (GAV)</CardTitle>
            <CardDescription>
              Jährliches Defizit von 3,4 Mrd.€ (2024)
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
            <div className="bg-[#000000] bottom w-full p-2 rounded-md mb-2 border-4 border-gray-800">
              <div className="flex justify-center items-center space-x-2 font-mono text-xl sm:text-xl md:text-xl lg:text-xl text-[#ff0000] font-bold" style={{ textShadow: '0 0 10px #ff0000' }}>
                <div className="relative bg-[#220000] px-2 py-1 rounded">
                  <span className="relative z-10">{Math.round(deficitGAV).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="p-4">
      <Card className="w-full max-w-2xl mx-auto bg-black p-4 rounded-lg shadow-lg border-4 border-gray-700">
        <CardContent className="p-0">
          <div className="bg-[#000000] p-4 rounded-md mb-4 border-8 border-gray-800">
            <div className="flex justify-center items-center space-x-2 font-mono text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#ff0000] font-bold" style={{ textShadow: '0 0 10px #ff0000' }}>
              <div className="relative bg-[#220000] px-2 py-1 rounded">
                <span className="relative z-10">{Math.round(deficit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €</span>
              </div>
            </div>
            <div className="text-center text-[#ffffff] text-sm">Quelle: ...</div>
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
              onClick={() =>
                {
                  setDeficit(initialDeficit),
                  setDeficitGKV(initialDeficit),
                  setDeficitGPV(initialDeficit),
                  setDeficitGRV(initialDeficit),
                  setDeficitGAV(initialDeficit),
                  setIsRunning(false)
                }}
              className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white rounded-full font-bold text-lg"
            >
              Zurücksetzen
            </Button>
          </div>
          {/*
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
            <Label htmlFor="increase-rate" className="w-full sm:w-auto text-[#ff6666] font-bold">Anstieg (€/s):</Label>
            <Input
              id="increase-rate"
              type="number"
              value={customIncreaseRate}
              onChange={handleIncreaseRateChange}
              className="w-full sm:w-24 bg-gray-800 text-[#ff0000] border-gray-700 rounded-md font-digital text-lg"
              min="0"
            />
          </div>
          */}
        </CardContent>
      </Card>
      </div>
    </div>
  )
}