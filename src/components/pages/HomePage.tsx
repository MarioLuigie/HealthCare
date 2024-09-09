// modules
import Image from 'next/image'
import Link from 'next/link'
// lib
import { images } from '@/lib/constants'
// components
import PageTitle from '@/components/shared/PageTitle'
import UserForm from '@/components/forms/UserForm'
import LogoFull from '@/components/content/LogoFull'
import Copyright from '@/components/shared/Copyright'

export default function HomePage() {
	return (
		<div className="flex h-screen max-h-screen">
			{/* TODO: OTP Verification | PassKey Modal  */}
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[496px]">
					<LogoFull />
					<PageTitle
						title="Hi there !"
						description="Get started with appointments."
					/>
					<UserForm />
					<Copyright>
						<Link href="/?admin=true" className="text-green-500">
							Admin
						</Link>
					</Copyright>
				</div>
			</section>
			<section className="max-w-[50%]">
				<Image
					src={images.HOME_PAGE_IMAGE.path}
					height={1000}
					width={1000}
					alt={images.HOME_PAGE_IMAGE.alt}
					className="side-img"
					priority
				/>
			</section>
		</div>
	)
}
