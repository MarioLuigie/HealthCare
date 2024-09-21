// modules
import clsx from "clsx"
import Image from "next/image"
// lib
import { Status } from "@/lib/types/enums"
import { StatusConfig } from "@/lib/constants"

export const StatusBadge = ({ status }: { status: Status }) => {
  // status = Status.SCHEDULED

  const { bgColor, textColor, icon } = StatusConfig[status] || {}

  return (
    <div className={clsx("status-badge", bgColor)}>
      <Image
        src={icon}
        alt="status icon"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p className={clsx("text-12-semibold capitalize", textColor)}>
        {status.toLowerCase()}
      </p>
    </div>
  )
}
