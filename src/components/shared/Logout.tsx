'use client'
// lib
import { handleLogout } from "@/lib/handlers/auth.handlers"

export default function Logout() {
	return (
		<div
			className="text-zinc-200 text-lg cursor-pointer"
			onClick={handleLogout}
		>
			Log out
		</div>
	)
}
