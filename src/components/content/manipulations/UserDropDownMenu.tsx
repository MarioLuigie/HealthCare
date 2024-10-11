'use client'
// components
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
				className="shad-dropDownMenu min-w-[270px] p-6 flex flex-col gap-2 items-start"
			>
				{/* Mode selection item */}
				<div className="pl-2 text-sm">
					<p>Mode</p>
				</div>

				{/* Separator */}
				<DropdownMenuSeparator className="w-full h-[1px] bg-dark-500 my-2" />

				{/* User options */}
				<DropdownMenuItem className="cursor-pointer">
					<p>Profile</p>
				</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer">
					<p>Account</p>
				</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer">
					<p>Settings</p>
				</DropdownMenuItem>

				{/* Separator */}
				<DropdownMenuSeparator className="w-full h-[1px] bg-dark-500 my-2" />

				{/* Sign out option */}
				<DropdownMenuItem className="cursor-pointer flex justify-end mt-6">
					<SignOut />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
