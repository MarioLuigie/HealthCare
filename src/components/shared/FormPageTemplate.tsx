import Image from 'next/image'

type FormPageTemplateProps = {
	children: React.ReactNode
	image: { [key: string]: string }
	classes?: string
}

export default function FormPageTemplate({
	children,
	image,
	classes,
}: FormPageTemplateProps) {
	return (
		<div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container my-auto max-h-screen overflow-y-auto">
				<div className={`sub-container max-w-[780px] ${classes}`}>{children}</div>
			</section>
			<section className="max-w-[33%]">
				<Image
					src={image.path}
					height={1000}
					width={1000}
					alt={image.alt}
					className="side-img"
				/>
			</section>
		</div>
	)
}
