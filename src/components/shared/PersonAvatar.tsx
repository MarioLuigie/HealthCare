import Image from 'next/image'

export default function PersonAvatar({ person }: { person: any }) {
	return (
		<div className="flex justify-start items-center gap-4">
			<Image src={person.image} width={32} height={32} alt={person.name} />
			<p>{person.name}</p>
		</div>
	)
}
