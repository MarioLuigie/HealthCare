import Image from 'next/image'

type FailedResProps = {
	imageSrc: string
	entity: string
  msg?: string
	action?: string
}

export default function FailedRes({ imageSrc, entity, msg, action }: FailedResProps) {
	return (
		<section className="flex flex-col items-center">
			<Image src={imageSrc} height={250} width={190} alt="failed" />
			<h2 className="header mb-6 max-w-[650px] text-center">
				Your <span className="text-red-400">{entity}</span> could not be {action} successfully!
			</h2>
			{msg && <p className='text-red-400'>{msg}</p>}
		</section>
	)
}
