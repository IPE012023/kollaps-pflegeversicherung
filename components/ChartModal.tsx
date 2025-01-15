import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LineChartComponent } from "./LineChart";

function ChartModal({
  isOpen,
  onClose,
  title,
  subtitle,
  data,
  color,
  yAxisLabel,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  data: { year: number; value: number }[];
  color: string;
  yAxisLabel?: string;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="dark:bg-[hsl(var(--card))] dark:text-[hsl(var(--card-foreground))]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <LineChartComponent
            data={data}
            color={color}
            yAxisLabel={yAxisLabel}
            subtitle={subtitle}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ChartModal;
