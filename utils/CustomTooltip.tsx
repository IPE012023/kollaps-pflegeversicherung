import { TooltipProps } from "recharts"

// Custom Tooltip component
function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip p-2 bg-white dark:bg-gray-800 border rounded shadow-lg">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="mb-2">
            <span
              className="font-bold"
              style={{ color: entry.payload.fill || "#000" }} // Safely accessing `fill`
            >
              {entry.name}:
            </span>{" "}
            <span
              className="font-medium dark:text-white" // Make text white in dark mode
            >
              {entry.value?.toLocaleString() || 0}
            </span>{" "}
            ({entry.payload.percentage})
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default CustomTooltip
