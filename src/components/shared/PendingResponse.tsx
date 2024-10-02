import Image from 'next/image'

type PendingResponseProps = {
	imageSrc: string
	entity: string
  msg?: string
	action?: string
}

export default function PendingResponse({ imageSrc, entity, msg, action }: PendingResponseProps) {
	return (
		<section className="flex flex-col items-center">
			<Image src={imageSrc} height={250} width={190} alt="success" />
			<h2 className="header mb-6 max-w-[650px] text-center">
				Your <span className="text-green-500">{entity}</span> is waiting for {action}!
			</h2>
			{msg && <p className='text-dark-700 text-center'>{msg}</p>}
		</section>
	)
}
