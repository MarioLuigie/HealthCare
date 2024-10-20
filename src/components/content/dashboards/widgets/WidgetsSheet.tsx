// lib
import { cn } from "@/lib/utils"
// components
import CustomSheet from "@/components/shared/CustomSheet"
import Widgets from "@/components/content/dashboards/widgets/Widgets"
import AsideTitle from "@/components/shared/AsideTitle"

type WidgetsSheetProps = {
  className?: string
}

export default function WidgetsSheet({ className }: WidgetsSheetProps) {
  return (
    <div className={cn("mobile", className)}>
      <CustomSheet
        className="overflow-auto remove-scrollbar bg-backgroundTransparent blur-plane border-l-0 p-4 pb-10"
        side="right"
      >
        <div className="flex flex-col h-full">
          <AsideTitle title="Widgets" />
          <Widgets />
        </div>
      </CustomSheet>
    </div>
  )
}
