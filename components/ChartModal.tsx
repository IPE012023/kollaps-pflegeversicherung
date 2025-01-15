"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LineChart, CartesianGrid, Line, XAxis, Tooltip, YAxis } from "recharts";

interface ChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: Array<{ year: number; value: number }>;
}

export function ChartModal({ isOpen, onClose, title, data }: ChartModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ff0000"
              activeDot={{ r: 8 }}
              dot={{ fill: "#ff0000", r: 4 }}
            />
          </LineChart>
        </div>
      </DialogContent>
    </Dialog>
  );
}
