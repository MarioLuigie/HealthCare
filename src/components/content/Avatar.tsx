import Image from 'next/image'

export default function Avatar({ user }: { user: any }) {
	if (!user) {
		return null
	}

	return (
		<>
			{user.image ? (
				<Image
					src={user.image}
					alt="Avatar"
					width={32}
					height={32}
					className="rounded-full"
				/>
			) : (
				<div className="flex-center w-[40px] aspect-square rounded-full bg-green-300 text-zinc-800 text-lg font-semibold">
					<p className="pt-[2px]">{user.name.charAt(0)}</p>
				</div>
			)}
		</>
	)
}
