// modules
import clsx from 'clsx'
// components
import { Button } from '@/components/ui/button'

interface BasicButtonProps {
  type?: "submit" | "reset" | "button" | undefined
	className?: string
	children: React.ReactNode
	isDanger?: boolean
	variant?: "outline" | "fill" | "text"
	onClick: () => void
}

export default function BasicButton({
  type='submit',
	className,
	children,
	isDanger=false,
	variant='outline',
	onClick
}: BasicButtonProps) {
	const variants = {
    outline:
      "text-white px-4 py-2 rounded-md bg-transparent flex-center border border-gray-500 min-w-[110px]",
    fill: "text-white px-4 py-2 rounded-md bg-green-500 flex-center min-w-[110px]",
    text: "text-green-500",
  }

	return (
		<Button
			type={type}
			className={clsx(isDanger ? 'shad-danger-btn' : 'shad-primary-btn', className, variants[variant])}
			onClick={onClick}
		>
      {children}
		</Button>
	)
}
