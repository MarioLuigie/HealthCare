'use client'
// modules
import { useRouter } from "next/navigation"
// lib
import { handleSignout } from "@/lib/handlers/auth.handlers"

export default function Signout() {
  const router = useRouter()
	return (
		<div
			className="text-zinc-200 text-lg cursor-pointer"
			onClick={() => handleSignout(router)}
		>
			Log out
		</div>
	)
}
