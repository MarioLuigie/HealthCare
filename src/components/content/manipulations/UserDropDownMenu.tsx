"use client"
// components
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "@/components/shared/UserAvatar"
import SignOut from "@/components/shared/SignOut"
import SwitchMode from "@/components/content/SwitchMode"
import SVGImage from "@/components/shared/SvgImage"
import { Icons } from "@/lib/constants"
import { UserDropDownMenuItems } from "@/lib/constants/menu"

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
          className="p-0 rounded-l-full rounded-r-[3000px] pr-6 bg-card hover:bg-hover"
        >
          <UserAvatar user={sessionUser} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="shad-dropDownMenu min-w-[290px] p-6 pb-2 flex flex-col gap-2 items-start"
      >
        {/* Mode selection item */}
        <div className="pl-2 text-sm flex items-center justify-between w-full">
          <SwitchMode />
        </div>

        {/* Separator */}
        <DropdownMenuSeparator className="w-full h-[1px] bg-dark-500 my-2" />

        {/* User options */}
        {UserDropDownMenuItems.map((item, i) => (
          <DropdownMenuItem
            key={item.title + i}
            className="cursor-pointer flex justify-end gap-2 items-center"
          >
            <SVGImage src={item.image} width={20} height={20} />
            <p>{item.title}</p>
          </DropdownMenuItem>
        ))}

        {/* Separator */}
        <DropdownMenuSeparator className="w-full h-[1px] bg-dark-500 my-2" />

        {/* Sign out option */}
        <DropdownMenuItem className="cursor-pointer flex justify-end mt-6 gap-2 items-center">
          <SVGImage src={Icons.SIGN_OUT_ICON.path} width={20} height={20} />
          <SignOut />
        </DropdownMenuItem>
				<div className="w-full text-center">
					<small className="text-dark-500 text-[12px]">© 2024 HealthCare by ARWcode</small>
				</div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
