import { Status } from "@/lib/types/enums"
import clsx from "clsx"
import Image from "next/image"

type StateCardProps = {
  status: Status
  count: number
  label: string
  icon: { path: string; alt: string }
}

export default function StateCard({
  status,
  count,
  label,
  icon,
}: StateCardProps) {
  return (
    <div className={clsx('stat-card', {
      'bg-green-300': status === Status.SCHEDULED,
      'bg-blue-300': status === Status.PENDING,
      'bg-red-300': status === Status.CANCELLED,
    })}>
      {status}
      Count: {count}
      {label}
      <Image src={icon.path} alt={icon.alt} width={30} height={30}/>
    </div>
  )
}
