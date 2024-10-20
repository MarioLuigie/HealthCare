// components
import WidgetsButton from "@/components/content/dashboards/widgets/WidgetsButton"
import NavButton from "@/components/shared/buttons/NavButton"

export default function WidgetsSheetTrigger() {
  return (
    <WidgetsButton>
      <NavButton
        navigate="back"
        size={40}
      />
    </WidgetsButton>
  )
}
