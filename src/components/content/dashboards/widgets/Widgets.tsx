'use client'
// modules
import { useState } from 'react'
// components
import NavButton from '@/components/shared/buttons/NavButton'
import Card from '@/components/shared/Card'

export default function Widgets() {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	const handleClose = () => {}

	return (
		<div className="overflow-hidden h-full min-w-[320px] flex flex-col items-center">
			<div className="w-full min-h-[54px] max-h-[54px] flex items-end justify-between px-4 pb-[4px]">
				<p>Widgets</p>
				<NavButton navigate="forward" onClick={() => {}} />
			</div>

			<div className="overflow-auto remove-scrollbar space-y-4 px-4 w-full">
				{new Array(25).fill('Test').map((item, i) => (
					<div key={i} className='space-y-1'>
						<p className="text-xs text-textSecondary">Test Information</p>
						<Card className="p-4 rounded-md bg-card shadow-lg w-full border border-border">
							<p>
								Widget <span>{item}</span>
							</p>
						</Card>
					</div>
				))}
			</div>
		</div>
	)
}
