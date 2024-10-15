'use client'
import GlobalResult from '@/components/search/GlobalResult'
import React, { useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils'
import { Icons } from '@/lib/constants'
import SVGImage from '@/components/shared/SvgImage'

export default function GlobalSearch() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const searchContainerRef = useRef(null)

	const query = searchParams.get('q')

	const [search, setSearch] = useState(query || '')
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const handleOutsideClick = (event: any) => {
			if (
				searchContainerRef.current &&
				// @ts-ignore
				!searchContainerRef.current.contains(event.target)
			) {
				setIsOpen(false)
				setSearch('')
			}
		}

		setIsOpen(false)

		document.addEventListener('click', handleOutsideClick)

		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [pathname])

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (search) {
				const newUrl = formUrlQuery({
					params: searchParams.toString(),
					key: 'global',
					value: search,
				})

				router.push(newUrl, { scroll: false })
			} else {
				if (query) {
					const newUrl = removeKeysFromQuery({
						params: searchParams.toString(),
						keysToRemove: ['global', 'type'],
					})

					router.push(newUrl, { scroll: false })
				}
			}
		}, 300)

		return () => clearTimeout(delayDebounceFn)
	}, [search, router, pathname, searchParams, query])

	return (
		<div
			className="relative w-full mb-6"
			ref={searchContainerRef}
		>
			<div className="bg-input shadow-lg relative flex xl:max-w-[500px] min-h-[45px] grow items-center gap-1 rounded-lg px-4 mx-auto">
        <SVGImage src={Icons.SEARCH_ICON.path} width={24} height={24} />
				<Input
					type="text"
					placeholder="Search globally"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value)

						if (!isOpen) setIsOpen(true)
						if (e.target.value === '' && isOpen) setIsOpen(false)
					}}
					className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
				/>
			</div>
			{isOpen && <GlobalResult />}
		</div>
	)
}