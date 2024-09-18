import LogoFull from "@/components/content/LogoFull"

export default function Header() {
  return (
    <header className="border-b-[1px] border-zinc-800 p-6 max-sm:p-4 z-40 min-h-[120px] sticky top-0 left-0 w-full grid grid-cols-3 items-center">
      <LogoFull />
    </header>
  )
}
