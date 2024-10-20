// lib
import { cn } from "@/lib/utils"
// components
import NavButton from "@/components/shared/buttons/NavButton"

type WidgetsbarTriggerProps = {
  isOpen: boolean
  handleClose: () => void
}

export default function WidgetsbarTrigger({
  isOpen,
  handleClose,
}: WidgetsbarTriggerProps) {
  return (
    <div className={cn("relative flex min-h-minFooterHeight w-full grow")}>
      <div
        className={cn(
          "absolute right-0 bottom-0 w-16 flex-center min-h-minFooterHeight pl-[6px] rounded-l-full bg-card border border-border transition-all duration-300 ease-in-out",
          !isOpen && "transform -translate-x-widgetsWidth"
        )}
      >
        <NavButton
          navigate="forward"
          onClick={handleClose}
          size={40}
          rotate={180}
        />
      </div>
    </div>
  )
}
