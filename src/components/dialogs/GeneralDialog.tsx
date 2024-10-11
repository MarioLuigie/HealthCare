'use client'
// modules
import clsx from 'clsx'
// components
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '@/components/ui/dialog'
import PatientForm from '../forms/PatientForm'

type GeneralDialogProps = {
	handleCloseDialog: () => void
	isOpen: boolean
	children: React.ReactNode
	header?: boolean
	title?: string
	description?: string
	headerClasses?: string
	contentClasses?: string
}

export default function GeneralDialog({
	handleCloseDialog,
	isOpen,
	children,
	header,
	title,
	description,
	headerClasses,
	contentClasses,
}: GeneralDialogProps) {
	return (
		<Dialog open={isOpen} onOpenChange={handleCloseDialog}>
			<DialogContent
				className={clsx(
					'border-dark-500 bg-background h-full w-full max-w-none max-h-none p-0 sm:msx-w-md grid-rows-[auto,1fr]',
					contentClasses
				)}
			>
				<DialogHeader
					className={clsx('border-dark-500 border-b p-8', headerClasses)}
				>
					{header && (
						<>
							<DialogTitle className="mb-3 text-xl">{title}</DialogTitle>
							<DialogDescription>{description}</DialogDescription>
						</>
					)}
				</DialogHeader>
				<div className={clsx("p-6 pb-20 w-full flex flex-col flex-grow items-center overflow-auto")}>
					{children}
				</div>
			</DialogContent>
		</Dialog>
	)
}