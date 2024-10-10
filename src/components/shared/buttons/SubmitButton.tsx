// modules
import Image from 'next/image'
import clsx from 'clsx'
// lib
import { Icons } from '@/lib/constants'
// components
import { Button } from '@/components/ui/button'

interface SubmitButtonProps {
	isLoading?: boolean
	className?: string
	children: React.ReactNode
	isDanger?: boolean
	variant?: 'outline' | 'fill' | 'text'
}

export default function SubmitButton({
	isLoading=false,
	className,
	children,
	isDanger=false,
	variant='outline'
}: SubmitButtonProps) {
	const dangerVariants = {
    outline:
      "text-white px-4 py-2 rounded-md bg-transparent flex-center border border-red-700 min-w-[110px] hover:bg-transparent !important",
    fill: "text-white px-4 py-2 rounded-md flex-center min-w-[110px] bg-red-700 hover:bg-red-400 !important",
    text: "text-red-400 hover:text-red-300 bg-transparent hover:bg-transparent !important",
  }

	const primaryVariants = {
    outline:
      "text-white px-4 py-2 rounded-md bg-transparent flex-center border border-green-500 min-w-[110px] hover:bg-transparent !important",
    fill: "text-white px-4 py-2 rounded-md bg-green-500 flex-center min-w-[110px] hover:bg-green-400 !important",
    text: "text-green-500 hover:text-green-400 bg-transparent hover:bg-transparent !important",
  }

	return (
		<Button
			type="submit"
			disabled={isLoading}
			className={clsx(isDanger ? dangerVariants[variant] : primaryVariants[variant], className)}
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
