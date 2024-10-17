import clsx from "clsx"

export default function Main({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main className={clsx("flex flex-col overflow-auto remove-scrollbar grow h-full p-4 pt-0", className)}>
      {children}
    </main>
  )
}
