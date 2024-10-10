'use client'
// components
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'
import PatientForm from '../forms/PatientForm'

type GeneralDialogProps = {
	handleCloseDialog: () => void
	isOpen: boolean
	children: React.ReactNode
	title: string
	description: string
}

export default function GeneralDialog({
	handleCloseDialog,
	isOpen,
	children,
	title,
	description,
}: GeneralDialogProps) {
	return (
		<Dialog open={isOpen} onOpenChange={handleCloseDialog}>
			<DialogContent className="border-dark-500 bg-background h-full w-full max-w-none p-0 sm:msx-w-md grid-rows-[auto,1fr]">
				<DialogHeader className="border-dark-500 border-b p-8">
					<DialogTitle className="mb-4">{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<div className="p-8 w-full flex justify-center overflow-auto">{children}</div>
			</DialogContent>
		</Dialog>
	)
}
