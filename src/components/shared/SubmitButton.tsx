// modules
import Image from 'next/image'
// lib
import { icons } from '@/lib/constants'
// components
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
			{isLoading ? (
				<div className="flex items-center gap-4">
					<Image
						src={icons.LOADER.path}
						alt={icons.LOADER.alt}
						width={24}
						height={24}
						className="animate-spin"
						priority
					/>
					Loading...
				</div>
			) : (
				children
			)}
		</Button>
	)
}
