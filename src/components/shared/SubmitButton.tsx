import { Button } from '@/components/ui/button'

interface SubmitButtonProps {
	isLoading: boolean
	className?: string
	children: React.ReactNode
}

export default function SubmitButton({
	isLoading,
	className,
	children,
}: SubmitButtonProps) {
	return (
		<Button
			type="submit"
			disabled={isLoading}
			className={className ?? 'shad-primary-btn w-full'}
		>
			{isLoading ? <div>Submitting</div> : children}
		</Button>
	)
}
