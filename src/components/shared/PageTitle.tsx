interface PageTitleProps {
	title: string
	description: string
}

export default function PageTitle({ title, description }: PageTitleProps) {
	return (
		<section className="mb-10 space-y-3">
			<h1 className="header">{title}</h1>
			<p className="text-dark-700">{description}</p>
		</section>
	)
}
