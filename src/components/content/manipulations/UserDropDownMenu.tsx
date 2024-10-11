'use client'
// modules
import { MoreHorizontal } from 'lucide-react'

//lib

//components
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import UserAvatar from '@/components/shared/UserAvatar'

export default function UserDropDownMenu({
	sessionUser,
}: {
	sessionUser: any
}) {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="p-0 rounded-full pr-6 bg-dark-400">
						<UserAvatar sessionUser={sessionUser} />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="shad-dropDownMenu min-w-[300px]">
					<DropdownMenuItem className="cursor-pointer">
						Copy appointment ID
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="cursor-pointer">
						View appointment details
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="cursor-pointer">
						View appointment details
					</DropdownMenuItem>
					<DropdownMenuItem className="cursor-pointer">
						View patient details
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
