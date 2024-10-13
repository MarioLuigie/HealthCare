// modules
import clsx from "clsx"
// components
import { Sidebar } from "@/components/content/dashboard/patient/menu/sidebar/Sidebar"

export default function Aside({
  className,
  position,
}: {
  className?: string
  position: "left" | "right"
}) {
  const positionLeft = 'left'
  const positionRight = 'right'
  return (
    <aside
      className={clsx(
        position === positionRight && "border-l border-l-dark-500",
        position === positionLeft && "border-r border-r-dark-500",
        "p-4 flex flex-col gap-3",
        className
      )}
    >
      {/* Menu {position === 'right' ? "right" : "left"} */}
      <p className="text-md hidden sm:block">Menu</p>
      <Sidebar />
    </aside>
  )
}
