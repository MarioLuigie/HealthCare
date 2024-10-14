import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

type CustomSheetProps = {
	children: React.ReactNode
	side?: 'left' | 'right' | 'top' | 'bottom'
	isHeader?: boolean
	title?: string
	description?: string
	trigger?: React.ReactNode | string
}

export default function CustomSheet({
	children,
	side = 'left',
	isHeader,
	title,
	description,
	trigger = 'Open',
}: CustomSheetProps) {
	return (
		<Sheet>
			<SheetTrigger>{trigger}</SheetTrigger>
			<SheetContent side={side}>
				{isHeader && (title || description) && (
					<SheetHeader>
						{title && <SheetTitle>{title}</SheetTitle>}
						{description && <SheetDescription>{description}</SheetDescription>}
					</SheetHeader>
				)}
				{children}
			</SheetContent>
		</Sheet>
	)
}


// import {
// 	Sheet,
// 	SheetContent,
// 	SheetDescription,
// 	SheetHeader,
// 	SheetTitle,
// 	SheetTrigger,
// } from '@/components/ui/sheet'

// type CustomSheetProps = {
// 	children: React.ReactNode
// 	side?: 'left' | 'right' | 'top' | 'bottom'
// 	isHeader?: boolean
// 	title?: string
// 	description?: string
//   trigger?: React.ReactNode | string
// }

// export default function CustomSheet({
// 	children,
// 	side = 'left',
// 	isHeader,
// 	title,
// 	description,
//   trigger,
// }: CustomSheetProps) {
// 	return (
// 		<Sheet>
// 			<SheetTrigger>{trigger ? trigger : 'Open'}</SheetTrigger>
// 			<SheetContent side={side}>
// 				{isHeader && (
// 					<SheetHeader>
// 						<SheetTitle>{title}</SheetTitle>
// 						<SheetDescription>{description}</SheetDescription>
// 					</SheetHeader>
// 				)}
// 				{children}
// 			</SheetContent>
// 		</Sheet>
// 	)
// }
