'use client'
import { ReactSVG } from 'react-svg'

export default function SVGImage({ path, width, height }: { path: string, width: string, height: string }) {
	return <ReactSVG src={path} width={width} height={height} />
}