// components
import Copyright from "@/components/content/Copyright"
import WidgetsSheet from "@/components/content/dashboards/widgets/WidgetsbarSheet"

export default function Footer() {
  return (
    <footer className="min-h-minFooterHeight border-t border-t-border">
      <div className="relative flex-center w-full h-full">
        <Copyright />
        <WidgetsSheet className="absolute right-0 bottom-0" />
      </div>
    </footer>
  )
}
