'use client'
// modules
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
// lib
import { Icons } from '@/lib/constants'
//components
import SwitchButton from '@/components/shared/buttons/SwitchButton'
import SVGImage from '@/components/shared/SvgImage'

export default function SwitchMode() {
	const { theme, setTheme } = useTheme()
	const [isDarkMode, setIsDarkMode] = useState<boolean>(theme === 'dark')

	const handleChangeMode = () => {
		const newMode = isDarkMode ? 'light' : 'dark'
		setTheme(newMode)
		setIsDarkMode((prevState) => !prevState)
	}

	useEffect(() => {
		setIsDarkMode(theme === 'dark')
	}, [theme])

	return (
		<div className="flex items-center space-x-2">
			{isDarkMode ? (
				<SVGImage
					src={Icons.MOON_ICON.path}
					width={16}
					height={16}
					className=""
				/>
			) : (
				<SVGImage
					src={Icons.SUN_ICON.path}
					width={16}
					height={16}
					className=""
				/>
			)}
			<SwitchButton
				id="general-app-mode-changer"
				checked={isDarkMode}
				onCheckedChange={handleChangeMode}
			/>
		</div>
	)
}
