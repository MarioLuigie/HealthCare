// lib
import { cn } from "@/lib/utils"
// components
import Card from "@/components/shared/Card"

export default function Widgets() {
  return (
    <div
      className={cn(
        "overflow-auto remove-scrollbar space-y-4 px-4 pb-6 w-full"
      )}
    >
      {new Array(30).fill("Test").map((item, i) => (
        <div key={i} className="space-y-1">
          <p className="text-xs text-textSecondary">Test Information</p>
          <Card className="p-4 rounded-md bg-card shadow-lg w-full border border-border">
            <p>
              Widget <span>{item}</span>
            </p>
          </Card>
        </div>
      ))}
    </div>
  )
}
