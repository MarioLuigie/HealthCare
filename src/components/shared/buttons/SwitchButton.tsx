"use client"
//components
import { Switch } from "@/components/ui/switch"

export default function SwitchButton({
  id,
  checked,
  onCheckedChange,
}: {
  id?: string
  checked: boolean
  onCheckedChange: () => void
}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  )
}
