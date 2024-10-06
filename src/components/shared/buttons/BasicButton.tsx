// components
import { Button } from '@/components/ui/button'

interface BasicButtonProps {
  type?: "submit" | "reset" | "button" | undefined
	className?: string
	children: React.ReactNode
	isDanger?: boolean
}

export default function BasicButton({
  type='submit',
	className,
	children,
	isDanger=false
}: BasicButtonProps) {
	return (
		<Button
			type={type}
			className={`${isDanger ? 'shad-danger-btn' : 'shad-primary-btn'} ${className}`}
		>
      {children}
		</Button>
	)
}
