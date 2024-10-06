// modules
import Link from "next/link"
import clsx from "clsx"

type LinkButtonProps = {
  children: string | React.ReactNode
  href: string
  variant?: "outline" | "fill" | "text"
}

export default function LinkButton({
  children,
  href,
  variant = "outline",
}: LinkButtonProps) {
  const variants = {
    outline:
      "text-white px-4 py-2 rounded-lg bg-transparent flex-center border border-gray-500 min-w-[110px]",
    fill: "text-white px-4 py-2 rounded-lg bg-green-500 flex-center min-w-[110px]",
    text: "text-green-500",
  }

  return (
    <Link
      href={href}
      className={clsx(variants[variant])}
    >
      {children}
    </Link>
  )
}
