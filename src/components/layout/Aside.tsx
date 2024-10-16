// modules
import clsx from "clsx"
// components
import Sidebar from "@/components/content/dashboards/patient/menus/sidebar/Sidebar"

export default function Aside({ className }: { className?: string }) {
  return (
    <aside
      className={clsx("flex flex-col border-r border-border", className)}
    >
      <div className="w-full min-h-[50px] max-h-[50px] flex items-end">
        <p className="pl-4">Menu</p>
      </div>
      <Sidebar />
      <div className="w-full min-h-[115px] max-h-[115px]"></div>
    </aside>
  )
}
