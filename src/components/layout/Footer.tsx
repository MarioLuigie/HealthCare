// components
import Copyright from "@/components/content/Copyright"
import WidgetsSheet from "@/components/content/dashboards/widgets/WidgetsSheet"

export default function Footer() {
  return (
    <footer className="min-h-minFooterHeight border-t border-t-border">
      <div className="relative flex-start w-full h-full p-4">
        <Copyright />
        <WidgetsSheet className="absolute right-0 bottom-0 h-footerHeight" />
      </div>
    </footer>
  )
}
