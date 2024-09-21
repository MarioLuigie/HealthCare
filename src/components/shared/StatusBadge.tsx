// modules
import clsx from "clsx"
import Image from "next/image"
// lib
import { Status } from "@/lib/types/enums"
import { IconPath } from "@/lib/constants/paths"

export const StatusBadge = ({ status }: { status: Status }) => {
  // status = Status.SCHEDULED

  // Map colors to status
  const statusConfig = {
    [Status.SCHEDULED]: {
      bg: "bg-green-600",
      text: "text-green-500",
      img: IconPath.SCHEDULED,
    },
    [Status.PENDING]: {
      bg: "bg-blue-600",
      text: "text-blue-500",
      img: IconPath.PENDING,
    },
    [Status.CANCELLED]: {
      bg: "bg-red-600",
      text: "text-red-500",
      img: IconPath.CANCELLED,
    },
    [Status.FINISHED]: {
      bg: "bg-zinc-600",
      text: "text-zinc-300",
      img: IconPath.FINISHED,
    },
  }

  const { bg, text, img } = statusConfig[status] || {}

  return (
    <div className={clsx("status-badge", bg)}>
      <Image
        src={img}
        alt="status icon"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p className={clsx("text-12-semibold capitalize", text)}>
        {status.toLowerCase()}
      </p>
    </div>
  )
}
