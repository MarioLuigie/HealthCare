'use client'
import { ReactSVG } from 'react-svg'

export default function SvgImage({ path }: { path: string }) {
	return <ReactSVG src={path} />
}