// modules
import {
	ChevronRight,
	ChevronLeft,
	ChevronDown,
	ChevronUp,
} from 'lucide-react'

type NavButtonProps = {
	navigate: 'up' | 'down' | 'forward' | 'back'
	onClick: () => void
}

const iconMap = {
	'up': ChevronUp,
	'down': ChevronDown,
	'forward': ChevronRight,
	'back': ChevronLeft,
}

export default function NavButton({ navigate, onClick }: NavButtonProps) {
	const IconComponent = iconMap[navigate]

	return (
		<button onClick={onClick} aria-label={`Navigate ${navigate}`}>
			<IconComponent />
		</button>
	)
}

// // modules
// import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react'

// const enum Nav {
// 	UP = 'up',
// 	DOWN = 'down',
// 	FORWARD = 'forward',
// 	BACK = 'back',
// }

// type NavButtonProps = {
// 	navigate: Nav.UP | Nav.DOWN | Nav.FORWARD | Nav.BACK
// 	onClick: () => void
// }

// export default function NavButton({ navigate, onClick }: NavButtonProps) {
// 	switch (navigate) {
// 		case Nav.UP:
// 			return (
// 				<button onClick={onClick}>
// 					<ChevronUp />
// 				</button>
// 			)
// 		case Nav.DOWN:
// 			return (
// 				<button onClick={onClick}>
// 					<ChevronDown />
// 				</button>
// 			)
// 		case Nav.FORWARD:
// 			return (
// 				<button onClick={onClick}>
// 					<ChevronRight />
// 				</button>
// 			)
// 		case Nav.BACK:
// 			return (
// 				<button onClick={onClick}>
// 					<ChevronLeft />
// 				</button>
// 			)
// 		default:
// 			return null
// 	}
// }
