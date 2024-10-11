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
import SignOut from '@/components/shared/SignOut'

export default function UserDropDownMenu({
	sessionUser,
}: {
	sessionUser: any
}) {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="p-0 rounded-l-full rounded-r-[3000px] pr-6 bg-dark-400"
					>
						<UserAvatar user={sessionUser} />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="end"
					className="shad-dropDownMenu min-w-[300px] p-6"
				>
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
						<SignOut />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
