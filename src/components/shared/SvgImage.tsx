'use client'
import { ReactSVG } from 'react-svg'

export default function SVGImage({
	src,
	width,
	height,
	className,
}: {
	src: string
	width?: number
	height?: number
	className?: string
}) {
	return (
		<ReactSVG
			src={src}
			width={width}
			height={height}
			className={className}
			beforeInjection={(svg) => {
				svg.setAttribute('style', `width: ${width}; height: ${height}`)
			}}
		/>
	)
}
