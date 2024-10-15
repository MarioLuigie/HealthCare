'use client'
// modules
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
// lib
import { Icons } from '@/lib/constants'
import { Route } from '@/lib/constants/paths'

export default function LogoFull({
	redirect = false,
	mini,
}: {
	redirect?: boolean
	mini?: boolean
}) {
	const { theme } = useTheme()
	const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null)

	useEffect(() => {
		setIsDarkTheme(theme === 'dark')
	}, [theme])

	const logo = (
		<Image
			src={Icons.LOGO_ICON.path}
			height={1000}
			width={1000}
			alt={Icons.LOGO_ICON.alt}
			className="h-11 w-fit"
			priority
		/>
	)
	const logoFullDarkMode = (
		<Image
			src={Icons.LOGO_FULL_ICON.path}
			height={1000}
			width={1000}
			alt={Icons.LOGO_FULL_ICON.alt}
			className="h-10 w-fit"
			priority
		/>
	)
	const logoFullLightMode = (
		<Image
			src={Icons.LOGO_FULL_BLACK_ICON.path}
			height={1000}
			width={1000}
			alt={Icons.LOGO_FULL_BLACK_ICON.alt}
			className="h-10 w-fit"
			priority
		/>
	)

	if (isDarkTheme === null) return <div></div>

	return (
		<>
			{/* Logo Full */}
			<div className="h-10 w-fit hidden sm:block">
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
			{/* Logo */}
			<div className="h-10 w-fit sm:hidden">
				{redirect ? <Link href={Route.HOME}>{logo}</Link> : logo}
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
