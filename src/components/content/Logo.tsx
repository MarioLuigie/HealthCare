"use client"
// modules
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
// lib
import { Icons } from "@/lib/constants"
import { Route } from "@/lib/constants/paths"

function LogoTemplate({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      height={1000}
      width={1000}
      alt={alt}
      className="h-11 w-fit"
      priority
    />
  )
}

export default function Logo({
  redirect,
  full,
}: {
  redirect?: boolean
  full?: boolean
}) {
  const { theme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null)

  useEffect(() => {
    setIsDarkTheme(theme === "dark")
  }, [theme])

  const logoSemi = 
    <LogoTemplate src={Icons.LOGO_ICON.path} alt={Icons.LOGO_ICON.alt} />
  
  const logoFullDarkMode = 
    <LogoTemplate
      src={Icons.LOGO_FULL_ICON.path}
      alt={Icons.LOGO_FULL_ICON.alt}
    />
  
  const logoFullLightMode = 
    <LogoTemplate
      src={Icons.LOGO_FULL_BLACK_ICON.path}
      alt={Icons.LOGO_FULL_BLACK_ICON.alt}
    />
  

  if (isDarkTheme === null) return <div></div>


	// ! Check or remove condition below
  if (full) {
    return (
      <div className="h-10 w-fit">
        {redirect ? (
          <Link href={Route.HOME}>
            {isDarkTheme ? logoFullDarkMode : logoFullLightMode}
          </Link>
        ) : isDarkTheme ? (
          logoFullDarkMode
        ) : (
          logoFullLightMode
        )}
      </div>
    )
  }
	
  return (
    <>
      {/* Logo Full */}
      <div className="h-10 w-fit desktop-sm">
        {redirect ? (
          <Link href={Route.HOME}>
            {isDarkTheme ? logoFullDarkMode : logoFullLightMode}
          </Link>
        ) : isDarkTheme ? (
          logoFullDarkMode
        ) : (
          logoFullLightMode
        )}
      </div>
      {/* Logo Semi */}
      <div className="h-10 w-fit mobile-sm">
        {redirect ? <Link href={Route.HOME}>{logoSemi}</Link> : logoSemi}
      </div>
    </>
  )
}

// "use client"
// // modules
// import Image from "next/image"
// import Link from "next/link"
// import { useTheme } from "next-themes"
// // lib
// import { Icons } from "@/lib/constants"
// import { Route } from "@/lib/constants/paths"

// export default function LogoFull({
//   redirect = false,
// }: {
//   redirect?: boolean
// }) {
//   const { theme } = useTheme()
//   const isDarkTheme = theme === "dark"

//   const logoFull = (
//     <Image
//       src={Icons.LOGO_FULL_ICON.path}
//       height={1000}
//       width={1000}
//       alt={Icons.LOGO_FULL_ICON.alt}
//       className="h-10 w-fit"
//       priority
//     />
//   )
//   const logoFullBlack = (
//     <Image
//       src={Icons.LOGO_FULL_BLACK_ICON.path}
//       height={1000}
//       width={1000}
//       alt={Icons.LOGO_FULL_BLACK_ICON.alt}
//       className="h-10 w-fit"
//       priority
//     />
//   )

//   return (
//     <div className="h-10 w-fit hidden sm:block">
//       {redirect ? (
//         <Link href={Route.HOME}>
//           {isDarkTheme ? logoFull : logoFullBlack}
//         </Link>
//       ) : isDarkTheme ? (
//         logoFull
//       ) : (
//         logoFullBlack
//       )}
//     </div>
//   )
// }

// "use client"
// // modules
// import Image from "next/image"
// import Link from "next/link"
// import { useTheme } from "next-themes"
// // lib
// import { Icons } from "@/lib/constants"
// import { Route } from "@/lib/constants/paths"
// import { useEffect, useState } from "react"

// export default function LogoFull({
//   redirect = false,
// }: {
//   redirect?: boolean
// }) {
//   const { theme, resolvedTheme } = useTheme() // Use resolvedTheme for consistent theme handling
//   const [isThemeLoaded, setIsThemeLoaded] = useState(false) // State to check if theme is loaded

//   useEffect(() => {
//     setIsThemeLoaded(true) // Set theme loaded to true once the component is mounted
//   }, [])

//   // Determine the logo based on the resolved theme
//   const isDarkTheme = resolvedTheme === "dark"

//   // Prevent rendering until theme is loaded
//   if (!isThemeLoaded) return null;

//   const logoFullPath = isDarkTheme ? Icons.LOGO_FULL_BLACK_ICON.path : Icons.LOGO_FULL_ICON.path
//   const logoFullAlt = isDarkTheme ? Icons.LOGO_FULL_BLACK_ICON.alt : Icons.LOGO_FULL_ICON.alt

//   return (
//     <div className="h-10 w-fit hidden sm:block">
//       {redirect ? (
//         <Link href={Route.HOME}>
//           <Image
//             src={logoFullPath}
//             height={1000}
//             width={1000}
//             alt={logoFullAlt}
//             className="h-10 w-fit"
//             priority
//           />
//         </Link>
//       ) : (
//         <Image
//           src={logoFullPath}
//           height={1000}
//           width={1000}
//           alt={logoFullAlt}
//           className="h-10 w-fit"
//           priority
//         />
//       )}
//     </div>
//   )
// }
