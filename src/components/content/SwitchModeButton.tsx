"use client"
// modules
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
// lib
import { Icons } from "@/lib/constants"
//components
import SwitchButton from "@/components/shared/buttons/SwitchButton"
import SVGImage from "@/components/shared/SvgImage"

export default function SwitchModeButton() {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState<boolean>(theme === "dark")

  const handleChangeMode = () => {
    const newMode = isDarkMode ? "light" : "dark"
    setTheme(newMode)
    setIsDarkMode((prevState) => !prevState)
  }

  useEffect(() => {
    setIsDarkMode(theme === "dark")
  }, [theme])

  return (
    <div className="flex justify-between items-center w-full">
      <p className="w-full">{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
      <div className="w-full flex items-center justify-end space-x-2">
        {isDarkMode ? (
          <SVGImage
            src={Icons.MOON_ICON.path}
            width={20}
            height={20}
            className=""
          />
        ) : (
          <SVGImage
            src={Icons.SUN_ICON.path}
            width={20}
            height={20}
            className=""
          />
        )}
        <SwitchButton
          id="general-app-mode-changer"
          checked={isDarkMode}
          onCheckedChange={handleChangeMode}
        />
      </div>
    </div>
  )
}
