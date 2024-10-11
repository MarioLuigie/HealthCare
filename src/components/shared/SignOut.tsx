'use client'
// modules
import { useRouter } from "next/navigation"
// lib
import { handleSignOut } from "@/lib/handlers/auth.handlers"

export default function SignOut() {
  const router = useRouter()
	return (
		<div
			className="text-sm cursor-pointer"
			onClick={() => handleSignOut(router)}
		>
			<p className="text-sm font-bold">Sign Out</p>
		</div>
	)
}