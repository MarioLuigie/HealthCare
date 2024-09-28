// components
import { Button } from '@/components/ui/button'

interface ButtonBasicProps {
  type?: "submit" | "reset" | "button" | undefined
	className?: string
	children: React.ReactNode
	isDanger?: boolean
}

export default function ButtonBasic({
  type='submit',
	className,
	children,
	isDanger=false
}: ButtonBasicProps) {
	return (
		<Button
			type={type}
			className={`${isDanger ? 'shad-danger-btn' : 'shad-primary-btn'} ${className}`}
		>
      {children}
		</Button>
	)
}
