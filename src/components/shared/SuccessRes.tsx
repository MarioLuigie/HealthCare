import Image from 'next/image'

type SuccessResProps = {
	imageSrc: string
	entity: string
  msg?: string
	action?: string
}

export default function SuccessRes({ imageSrc, entity, msg, action }: SuccessResProps) {
	return (
		<section className="flex flex-col items-center">
			<Image src={imageSrc} height={250} width={190} alt="success" />
			<h2 className="header mb-6 max-w-[650px] text-center">
				Your <span className="text-green-500">{entity}</span> has
				been successfully {action}!
			</h2>
			{msg && <p className='text-dark-700'>{msg}</p>}
		</section>
	)
}
