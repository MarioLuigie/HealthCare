import Image from "next/image"

type StateCardProps = {
  status: string
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
    <section className="flex flex-col bg-zinc-800">
      {status}
      Count: {count}
      {label}
      <Image src={icon.path} alt={icon.alt} width={30} height={30}/>
    </section>
  )
}
