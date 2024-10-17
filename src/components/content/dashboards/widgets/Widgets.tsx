'use client'
import Card from '@/components/shared/Card'
// modules
import { useState } from 'react'

export default function Widgets() {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	const handleClose = () => {}

	return (
		<div className="overflow-hidden h-full min-w-[320px] flex flex-col items-center">
			<div className="w-full min-h-[50px] max-h-[50px] flex items-end justify-between px-4 pb-[4px]">
				<p>Widgets</p>
        <button>nav</button>
			</div>

			<div className="overflow-auto remove-scrollbar space-y-2 px-4 w-full">
				{new Array(25).fill('Test').map((item, i) => (
					<>
          <p className="text-xs text-textSecondary">Test Information</p>
						<Card
							key={i}
							className="p-4 rounded-md bg-card shadow-lg w-full border border-border"
						>
							<p>Widget <span>{item}</span></p>
						</Card>
					</>
				))}
			</div>
		</div>
	)
}
