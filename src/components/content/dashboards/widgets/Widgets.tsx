'use client'
// modules
import { useState } from 'react'

export default function Widgets() {
	const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleClose = () => {
    
  }

	return (
		<>
			<div>
				<button onClick={handleClose}>Button</button>
			</div>
			<div className="overflow-auto remove-scrollbar space-y-4 px-4 min-w-[320px]">
				<p className="p-4 rounded-md bg-card shadow-lg w-full border border-border">
					Widget
				</p>
				<p className="p-4 rounded-md bg-card shadow-lg w-full border border-border">
					Widget
				</p>
				<p className="p-4 rounded-md bg-card shadow-lg w-full border border-border">
					Widget
				</p>
			</div>
		</>
	)
}
