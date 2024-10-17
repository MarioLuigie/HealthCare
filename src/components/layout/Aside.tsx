// components
import Sidebar from "@/components/content/dashboards/patient/menus/sidebar/Sidebar"

export default function Aside() {
  return (
    <aside
      className="hidden lg:flex h-full flex-col border-r border-border"
    >
      <Sidebar />
      <div className="w-full min-h-[115px] max-h-[115px]"></div>
    </aside>
  )
}
