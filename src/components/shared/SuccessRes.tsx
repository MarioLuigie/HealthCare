import Image from 'next/image'

type SuccessResProps = {
	imageSrc: string
	entity: string
  msg?: string
}

export default function SuccessRes({ imageSrc, entity, msg }: SuccessResProps) {
	return (
		<section className="flex flex-col items-center">
			<Image src={imageSrc} height={250} width={190} alt="success" />
			<h2 className="header mb-6 max-w-[600px] text-center">
				Your <span className="text-green-500">{entity}</span> has
				been successfully submitted!
			</h2>
			{msg && <p>{msg}</p>}
		</section>
	)
}
