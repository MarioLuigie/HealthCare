import Image from "next/image"

export default function UserAvatar({ user }: { user: any }) {
  return (
    <div className="flex justify-start items-center gap-3">
      {user?.image ? (
        <Image
          src={user?.image}
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      ) : (
        <div className="w-[40px] aspect-square flex-center rounded-full bg-zinc-200 text-zinc-800 text-lg font-semibold">
          {user?.name?.charAt(0)}
        </div>
      )}
      <p>{user.name}</p>
    </div>
  )
}
