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
			className="w-full h-full flex justify-center items-center"
			ref={searchContainerRef}
		>
			<div className='relative w-full'>
				<div className="flex items-center w-full xl:max-w-globalSearch border border-border bg-input min-h-[35px] grow gap-1 rounded-lg px-4 mx-auto">
					<SVGImage src={Icons.SEARCH_ICON.path} width={20} height={20} />
					<Input
						type="text"
						placeholder="Search globally"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value)

							if (!isOpen) setIsOpen(true)
							if (e.target.value === '' && isOpen) setIsOpen(false)
						}}
						className="paragraph-regular placeholder border-none bg-transparent shadow-none outline-none"
					/>
				</div>
				{isOpen && <GlobalResult />}
			</div>
		</div>
	)
}
