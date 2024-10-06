// modules
import Image from 'next/image'
// lib
import { Icons } from '@/lib/constants'
// components
import { Button } from '@/components/ui/button'

interface SubmitButtonProps {
	isLoading: boolean
	className?: string
	children: React.ReactNode
	isDanger?: boolean
}

export default function SubmitButton({
	isLoading,
	className,
	children,
	isDanger=false
}: SubmitButtonProps) {
	return (
		<Button
			type="submit"
			disabled={isLoading}
			className={`${isDanger ? 'shad-danger-btn' : 'shad-primary-btn'} ${className}`}
		>
			{isLoading ? (
				<div className="flex items-center gap-4">
					<Image
						src={Icons.LOADER_ICON.path}
						alt={Icons.LOADER_ICON.alt}
						width={24}
						height={24}
						className="animate-spin"
						priority
					/>
					Loading...
				</div>
			) : (
				<p className='text-[16px]'>{children}</p>
			)}
		</Button>
	)
}
