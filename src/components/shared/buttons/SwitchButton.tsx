"use client"
// modules
import clsx from "clsx"
//components
import { Switch } from "@/components/ui/switch"

export default function SwitchButton({
  id,
  checked,
  onCheckedChange,
	classes,
}: {
  id?: string
  checked: boolean
  onCheckedChange: () => void
	classes?: string
}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} className={clsx(classes)} />
    </div>
  )
}
