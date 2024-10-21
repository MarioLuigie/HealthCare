'use client'
import Link from 'next/link'
import Image from 'next/image'
import GlobalFilters from '@/components/search/GlobalFilters'
import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'next/navigation'
import { globalSearch } from '@/lib/actions/general.actions'
import Loader from '@/components/shared/Loader'

export default function GlobalResult() {
	const searchParams = useSearchParams()

	const [isLoading, setIsLoading] = useState(false)
	const [result, setResult] = useState([
		{ type: 'question', id: 1, title: 'Next.js question' },
		{ type: 'tag', id: 1, title: 'Nextjs' },
		{ type: 'user', id: 1, title: 'jsm' },
	])

	const global = searchParams.get('global')
	const type = searchParams.get('type')

	useEffect(() => {
		const fetchResult = async () => {
			setResult([])
			setIsLoading(true)

			try {
				// const res = await globalSearch({ query: global, type })
        const res = 'example'

				setResult(JSON.parse(res))
			} catch (error) {
				console.error(error)
				throw error
			} finally {
				setIsLoading(false)
			}
		}

		if (global) {
			fetchResult()
		}
	}, [global, type])

	const renderLink = (type: string, id: string) => {
		switch (type) {
			case 'question':
				return `/question/${id}`
			case 'answer':
				return `/question/${id}`
			case 'user':
				return `/profile/${id}`
			case 'tag':
				return `/tags/${id}`
			default:
				return '/'
		}
	}

	return (
		<div className="absolute top-full left-1/2 xl:max-w-globalSearch transform -translate-x-1/2 z-10 mt-2 w-full rounded-xl py-2 shadow-lg border border-border bg-input">
			<GlobalFilters />
			<div className="my-2 h-[1px] bg-border" />

			<div className="space-y-5">
				<p className="paragraph-semibold px-5 text-textSecondary">
					Top Match
				</p>

				{isLoading ? (
					<div className="flex-center flex-col px-5">
						<Loader />
						<p>
							Browsing the entire database
						</p>
					</div>
				) : (
					<div className="flex flex-col gap-2">
						{result.length > 0 ? (
							result.map((item: any, index: number) => (
								<Link
									href={renderLink(item.type, item.id)}
									key={item.type + item.id + index}
									className="flex w-full cursor-pointer items-start gap-3 px-5 py-2.5"
								>
									<Image
										src="/assets/icons/tag.svg"
										alt="tags"
										width={18}
										height={18}
										className="invert-colors mt-1 object-contain"
									/>

									<div className="flex flex-col">
										<p className="line-clamp-1">
											{item.title}
										</p>
										<p className="small-medium mt-1 font-bold capitalize">
											{item.type}
										</p>
									</div>
								</Link>
							))
						) : (
							<div className="flex-center flex-col px-5">
								<p className="body-regular px-5 py-2.5">
									No results found
								</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}