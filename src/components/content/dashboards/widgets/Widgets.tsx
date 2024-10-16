// 'use client'
// // modules
// import clsx from 'clsx'
// import { useState } from 'react'
// // components
// import NavButton from '@/components/shared/buttons/NavButton'
// import Card from '@/components/shared/Card'

// export default function Widgets() {
// 	const [isOpen, setIsOpen] = useState<boolean>(true)

// 	const handleClose = () => {
// 		setIsOpen(!isOpen)
// 		console.log('Widgets opened')
// 	}

// 	return (
// 		<div
// 			className={clsx(
// 				'h-full min-w-widgetsMinWidth flex flex-col items-center transition duration-300 ease-in-out',
// 				!isOpen && 'transform -translate-x-[-320px]'
// 			)}
// 		>
// 			<div className="w-full min-h-[54px] max-h-[54px] flex items-end justify-between px-4 pb-[4px]">
// 				<p>Widgets</p>
// 			</div>

// 			<div className="overflow-auto remove-scrollbar space-y-4 px-4 w-full">
// 				{new Array(25).fill('Test').map((item, i) => (
// 					<div key={i} className="space-y-1">
// 						<p className="text-xs text-textSecondary">Test Information</p>
// 						<Card className="p-4 rounded-md bg-card shadow-lg w-full border border-border">
// 							<p>
// 								Widget <span>{item}</span>
// 							</p>
// 						</Card>
// 					</div>
// 				))}
// 			</div>

// 			<div className="relative flex items-center min-h-minFooterHeight w-full">
// 				<div
// 					className={clsx(
// 						'absolute left-0 flex-center w-full h-full pl-[6px] rounded-l-lg bg-card border border-border transition duration-300 ease-in-out',
//             !isOpen && 'transform -translate-x-[60px]'
// 					)}
// 				>
// 					<NavButton navigate="forward" onClick={handleClose} size={50} rotate={180}/>
// 				</div>

// 				{/* {isOpen ? (
// 					<div className='absolute left-0 flex-center w-full h-full bg-red-300 trans transition duration-300 ease-in-out'>
// 						<NavButton
// 							navigate="forward"
// 							onClick={handleClose}
// 							size={50}
// 						/>
// 					</div>
// 				) : (
// 					<div className='absolute left-0 flex items-center w-full'>
// 						<NavButton navigate="back" onClick={handleClose} size={50} />
// 					</div>
// 				)} */}
// 			</div>
// 		</div>
// 	)
// }

'use client'
// modules
import clsx from 'clsx'
import { cn } from '@/lib/utils'
import { useState } from 'react'
// components
import NavButton from '@/components/shared/buttons/NavButton'
import Card from '@/components/shared/Card'

export default function Widgets() {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	const handleClose = () => {
		setIsOpen(!isOpen)
		console.log('Widgets opened')
	}

	return (
		<div
			className={cn(
				'h-full w-widgetsWidth flex flex-col items-center transition-all duration-300 ease-in-out',
				!isOpen && 'transform translate-x-widgetsWidth w-widgetsWidthZero'
			)}
		>
			<div className="w-full min-h-[54px] max-h-[54px] flex items-end justify-between px-4 pb-[4px]">
				<p>Widgets</p>
			</div>

			<div
				className={cn(
					'overflow-auto remove-scrollbar space-y-4 px-4 pb-6 w-full'
				)}
			>
				{new Array(30).fill('Test').map((item, i) => (
					<div key={i} className="space-y-1">
						<p className="text-xs text-textSecondary">Test Information</p>
						<Card className="p-4 rounded-md bg-card shadow-lg w-full border border-border">
							<p>
								Widget <span>{item}</span>
							</p>
						</Card>
					</div>
				))}
			</div>

			<div
				className={cn(
					'relative flex min-h-minFooterHeight w-full grow'
				)}
			>
				<div
					className={cn(
						'absolute right-0 bottom-0 w-16 flex-center min-h-minFooterHeight pl-[6px] rounded-l-full bg-card border border-border transition-all duration-300 ease-in-out',
						!isOpen && 'transform -translate-x-widgetsWidth'
					)}
				>
					<NavButton
						navigate="forward"
						onClick={handleClose}
						size={40}
						rotate={180}
					/>
				</div>
			</div>
		</div>
	)
}
