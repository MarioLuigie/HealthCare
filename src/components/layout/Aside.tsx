// modules
import clsx from "clsx"
// components
import Sidebar from "@/components/content/dashboards/patient/menus/sidebar/Sidebar"

export default function Aside({ className }: { className?: string }) {
  return (
    <aside
      className={clsx("hidden lg:flex h-full flex-col border-r border-border", className)}
    >
      <Sidebar />
      <div className="w-full min-h-[115px] max-h-[115px]"></div>
    </aside>
  )
}
