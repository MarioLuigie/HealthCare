import Image from 'next/image'

type FailedResponseProps = {
	imageSrc: string
	entity: string
  msg?: string
	action?: string
}

export default function FailedResponse({ imageSrc, entity, msg, action }: FailedResponseProps) {
	return (
		<section className="flex flex-col items-center">
			<Image src={imageSrc} height={250} width={190} alt="failed" unoptimized/>
			<h2 className="header mb-6 max-w-[650px] text-center">
				Your <span className="text-red-400">{entity}</span> could not be {action} successfully!
			</h2>
			{msg && <p className='text-center'>{msg}</p>}
		</section>
	)
}
