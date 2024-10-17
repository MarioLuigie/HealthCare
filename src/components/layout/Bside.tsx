// modules
import clsx from "clsx"
// components
import Widgets from "@/components/content/dashboards/widgets/Widgets"

export default function Bside({ className }: { className?: string }) {
  return (
    <aside
      className={clsx("flex flex-col border-l border-border h-full", className)}
    >
      <div className="w-full min-h-[50px] max-h-[50px] flex items-end">
        <p className="pl-4 pb-[4px]">Widgets</p>
      </div>
      <Widgets />
    </aside>
  )
}
