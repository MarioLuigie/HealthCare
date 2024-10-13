import clsx from "clsx"

export default function Main({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main className={clsx("flex flex-col", className)}>
      {children}
    </main>
  )
}
