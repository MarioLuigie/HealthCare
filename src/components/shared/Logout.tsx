'use client'
// modules
import { useRouter } from "next/navigation"
// lib
import { handleLogout } from "@/lib/handlers/auth.handlers"

export default function Logout() {
  const router = useRouter()
	return (
		<div
			className="text-zinc-200 text-lg cursor-pointer"
			onClick={() => handleLogout(router)}
		>
			Log out
		</div>
	)
}
