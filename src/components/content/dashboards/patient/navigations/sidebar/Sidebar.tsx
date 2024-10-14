"use client"
import { useRouter } from "next/navigation"
import { SidebarMenuItems } from "@/lib/constants/menu"
import SVGImage from "@/components/shared/SvgImage"

export function Sidebar() {
  const router = useRouter()

  return (
    <nav className="bg-card text-sm rounded-2xl py-4 overflow-auto remove-scrollbar">
      <ul className="space-y-2">
        {SidebarMenuItems.map((item, index) => (
          <li key={index} className="flex flex-col">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => router.push(item.path)}
                className="w-full text-left px-4 py-2 hover:bg-hover transition duration-300 ease-in-out rounded flex gap-2 items-center"
              >
                <SVGImage src={item.icon} width={20} height={20} />
                <p>{item.name}</p>
              </button>
            </div>
            {item.subMenu && (
              <ul className="rounded-lg ml-8">
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <button
                      onClick={() => router.push(subItem.path)}
                      className="w-full text-left pr-4 pl-[5px] py-[10px] hover:bg-hover transition duration-300 ease-in-out rounded flex gap-2 items-center"
                    >
                      <SVGImage src={subItem.icon} width={20} height={20} />
                      <p>{subItem.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
