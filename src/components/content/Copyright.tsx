import { Cloud } from "lucide-react"

export default function Copyright({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="flex justify-between items-start text-14-regular">
      <div className="flex flex-col w-full grow">
        <small className="text-textSecondary text-xs text-left w-full">
          &copy; 2024 HealthCare Medical Clinic.
        </small>
        <small className="text-textSecondary text-xs text-left w-full flex-center">
          <p className="mr-2">&copy; ARWcode. All rights reserved. </p>
          <Cloud size={14} />
          <p className="pl-[2px]">Version 1.0.0.</p>
        </small>
      </div>
      {children}
    </div>
  )
}
