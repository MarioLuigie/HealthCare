'use client'

export default function Logout() {
	return (
		<div
			className="text-zinc-200 text-lg cursor-pointer"
			onClick={() => console.log('Logged out')}
		>
			Log out
		</div>
	)
}
