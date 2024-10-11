'use client'
// modules
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
// lib
import { Icons } from '@/lib/constants'
//components
import { Switch } from '@/components/ui/switch'
import SVGImage from '@/components/shared/SvgImage'

export default function SwitchButton() {
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
			<Switch
				id="app-mode"
				checked={isDarkMode}
				onCheckedChange={handleChangeMode}
			/>
		</div>
	)
}
