'use client'
// modules
import { useRouter } from "next/navigation"
// lib
import { handleSignOut } from "@/lib/handlers/auth.handlers"

export default function Signout() {
  const router = useRouter()
	return (
		<div
			className="text-zinc-200 text-lg cursor-pointer"
			onClick={() => handleSignOut(router)}
		>
			Log out
		</div>
	)
}