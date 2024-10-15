'use client'
import React, { useState } from 'react'
import { GlobalSearchFilters } from '@/lib/constants/filters'
import { useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery } from '@/lib/utils'

export default function GlobalFilters() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const typeParams = searchParams.get('type')

	const [active, setActive] = useState(typeParams || '')

	const handleTypeClick = (item: string) => {
		if (active === item) {
			setActive('')

			const newUrl = formUrlQuery({
				params: searchParams.toString(),
				key: 'type',
				value: null,
			})

			router.push(newUrl, { scroll: false })
		} else {
			setActive(item)

			const newUrl = formUrlQuery({
				params: searchParams.toString(),
				key: 'type',
				value: item.toLowerCase(),
			})

			router.push(newUrl, { scroll: false })
		}
	}

	return (
		<div className="flex items-center gap-5 px-5">
			<p className="text-sm font-medium">Type: </p>
			<div className="flex gap-3">
				{GlobalSearchFilters.map((item) => (
					<button
						type="button"
						key={item.value}
						className={`hover:bg-hover transition duration-300 ease-in-out text-sm rounded-lg px-4 py-2 capitalize
              ${
								active === item.value
									? 'bg-backgroundActive'
									: 'bg-backgroundDisactive'
							}
            `}
						onClick={() => handleTypeClick(item.value)}
					>
						{item.name}
					</button>
				))}
			</div>
		</div>
	)
}