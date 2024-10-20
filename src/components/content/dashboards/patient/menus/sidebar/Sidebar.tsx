// components
import MainManu from "@/components/content/dashboards/patient/menus/sidebar/MainManu"
import AsideTitle from "@/components/shared/AsideTitle"
import Card from "@/components/shared/Card"

export default function Sidebar() {
  return (
    <div className="h-full overflow-hidden flex flex-col min-w-sidebarMinWidth">
      <AsideTitle title="Menu" />
      <div className="overflow-auto remove-scrollbar space-y-4 px-4 w-full">
        <MainManu />
        
        <div className="space-y-1">
          <p className="text-xs text-textSecondary">Test Information</p>
          <Card className="w-full h-[200px] rounded-xl p-4 bg-card">
            <p className="text-sm">Test Content</p>
          </Card>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-textSecondary">Test Information</p>
          <Card className="w-full h-[200px] rounded-xl p-4 bg-card">
            <p className="text-sm">Test Content</p>
          </Card>
        </div>

      </div>
    </div>
  )
}
