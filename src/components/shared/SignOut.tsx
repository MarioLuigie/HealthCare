'use client'
// modules
import { useRouter } from "next/navigation"
// lib
import { handleSignOut } from "@/lib/handlers/auth.handlers"

export default function SignOut() {
  const router = useRouter()
	return (
		<div
			className="text-zinc-200 text-sm font-semibold cursor-pointer"
			onClick={() => handleSignOut(router)}
		>
			Sign Out
		</div>
	)
}