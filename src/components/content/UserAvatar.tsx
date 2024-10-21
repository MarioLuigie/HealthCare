// components
import Avatar from '@/components/content/Avatar'


export default function UserAvatar({ user }: { user: any }) {
	if (!user) {
		return null
	}

	return (
		<div className="flex justify-start items-center gap-3">
			<Avatar user={user} />
			<p className='desktop'>{user.name}</p>
		</div>
	)
}
