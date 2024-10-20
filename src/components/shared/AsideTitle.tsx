export default function AsideTitle({ title }: { title: string }) {
  return (
    <div className="w-full min-h-[54px] max-h-[54px] flex items-end justify-between px-4 pb-[4px]">
      <p>{title}</p>
    </div>
  )
}
