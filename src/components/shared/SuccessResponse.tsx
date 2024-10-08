import Image from 'next/image'

type SuccessResponseProps = {
	imageSrc: string
	entity: string
  msg?: string
	action?: string
}

export default function SuccessResponse({ imageSrc, entity, msg, action }: SuccessResponseProps) {
	return (
		<section className="flex flex-col items-center">
			<Image src={imageSrc} height={250} width={190} alt="success" unoptimized/>
			<h2 className="header mb-6 max-w-[650px] text-center">
				Your <span className="text-green-500">{entity}</span> has
				been successfully {action}!
			</h2>
			{msg && <p className='text-dark-700 text-center'>{msg}</p>}
		</section>
	)
}
