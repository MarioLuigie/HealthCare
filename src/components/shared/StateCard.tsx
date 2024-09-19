import { Status } from "@/lib/types/enums"
import clsx from "clsx"
import Image from "next/image"

type StateCardProps = {
  status: Status
  count: number
  label: string
  icon: Icons
}

export default function StateCard({
  status,
  count,
  label,
  icon,
}: StateCardProps) {
  return (
    <div
      className={clsx("stat-card", {
        "bg-scheduled": status === Status.SCHEDULED,
        "bg-pending": status === Status.PENDING,
        "bg-cancelled": status === Status.CANCELLED,
      })}
    >
      <div className="flex gap-4 items-start">
        <Image
          src={icon.path}
          alt={icon.alt}
          width={32}
          height={32}
          className="size-8 w-fit"
        />
        <h2 className="text-32-bold text-zinc-200">{count}</h2>
      </div>
      <p className="text-14-regular text-zinc-400">{label}</p>
    </div>
  )
}
