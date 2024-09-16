interface PageTitleProps {
	title: string
	description: string
	classes?: string
}

export default function PageTitle({ title, description, classes }: PageTitleProps) {
	return (
		<section className={`space-y-3 ${classes}`}>
			<h1 className="header">{title}</h1>
			<p className="text-dark-700">{description}</p>
		</section>
	)
}
