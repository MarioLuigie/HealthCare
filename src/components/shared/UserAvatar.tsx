// modules
import Image from "next/image"

export default function UserAvatar({ sessionUser }: { sessionUser: any }) {
  if(!sessionUser) {
    return null
  }

  return (
    <div className="flex justify-start items-center gap-3">
      {sessionUser.image ? (
        <Image
          src={sessionUser.image}
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      ) : (
        <div className="flex-center w-[40px] aspect-square rounded-full bg-zinc-200 text-zinc-800 text-lg font-semibold">
          <p className="pr-[2px] pt-[2px]">{sessionUser.name.charAt(0)}</p>
        </div>
      )}
      <p>{sessionUser.name}</p>
    </div>
  )
}
