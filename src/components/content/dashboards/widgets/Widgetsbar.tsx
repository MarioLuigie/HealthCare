"use client"
// modules
import { useState } from "react"
// lib
import { cn } from "@/lib/utils"
// components
import WidgetsbarTrigger from "@/components/content/dashboards/widgets/WidgetsbarTrigger"
import AsideTitle from "@/components/shared/AsideTitle"
import Widgets from "@/components/content/dashboards/widgets/Widgets"

export default function Widgetsbar() {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={cn(
        "h-full w-widgetsWidth flex flex-col items-center transition-all duration-300 ease-in-out",
        !isOpen && "transform translate-x-widgetsWidth w-widgetsWidthZero"
      )}
    >
      <AsideTitle title="Widgets" />
      <Widgets />
      <WidgetsbarTrigger isOpen={isOpen} handleClose={handleClose} />
    </div>
  )
}
