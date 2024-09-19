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
    <div className={clsx('stat-card', {
      'bg-scheduled': status === Status.SCHEDULED,
      'bg-pending': status === Status.PENDING,
      'bg-cancelled': status === Status.CANCELLED,
    })}>
      {status}
      Count: {count}
      {label}
      <Image src={icon.path} alt={icon.alt} width={30} height={30}/>
    </div>
  )
}
