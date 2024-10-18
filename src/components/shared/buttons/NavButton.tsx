'use client'
// modules
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react'

type NavButtonProps = {
	navigate: 'up' | 'down' | 'forward' | 'back'
	onClick: () => void // Funkcja przesłana z komponentu rodzica
	className?: string
	size?: number
	rotate?: number
}

const iconMap = {
	up: ChevronUp,
	down: ChevronDown,
	forward: ChevronRight,
	back: ChevronLeft,
}

export default function NavButton({
	navigate,
	onClick,
	className,
	size = 24,
	rotate,
}: NavButtonProps) {
	const IconComponent = iconMap[navigate]
	const [isRotated, setIsRotated] = useState<boolean>(false)

	const handleClick = () => {
		if (rotate) setIsRotated((prev) => !prev)
		onClick()
	}

	return (
		<button
			onClick={handleClick}
			aria-label={`Navigate ${navigate}`}
			className={cn('w-full h-full', className)}
		>
			<IconComponent
				style={{
					width: `${size}px`,
					height: `${size}px`,
					transform: isRotated ? `rotate(${rotate}deg)` : 'none',
				}}
				className="transition-all duration-300 ease-in-out"
			/>
		</button>
	)
}
