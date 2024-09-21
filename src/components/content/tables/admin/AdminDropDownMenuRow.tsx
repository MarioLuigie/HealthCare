import { Status } from "@/lib/types/enums"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons, StatusConfig } from "@/lib/constants"
import Image from "next/image"

const StatusItem = ({
  status,
  title,
  icon,
}: {
  status: Status
  title: string
  icon: { path: string; alt: string }
}): React.ReactNode => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={icon.path}
        width={25}
        height={25}
        alt={icon.alt}
        className="w-4"
      />
      <p className={StatusConfig[status].textColor}>{title}</p>
    </div>
  )
}

export default function AdminDropDownMenuRow({ row }: { row: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuLabel>Your Actions</DropdownMenuLabel> */}
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(row.original.$id)}
          className="cursor-pointer"
        >
          Copy appointment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <StatusItem
            status={Status.SCHEDULED}
            title="Shedule"
            icon={Icons.SCHEDULED_ICON}
          />
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <StatusItem
            status={Status.CANCELLED}
            title="Cancel"
            icon={Icons.CANCELLED_ICON}
          />
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <StatusItem
            status={Status.PENDING}
            title="Await"
            icon={Icons.PENDING_ICON}
          />
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <StatusItem
            status={Status.FINISHED}
            title="Finish"
            icon={Icons.FINISHED_ICON}
          />
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
  )
}
