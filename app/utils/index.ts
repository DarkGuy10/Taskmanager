import { Status, Task, User } from '@/typings'

export const labelText = (type: Status) => {
	switch (type) {
		case 'backlog':
			return 'Backlog'
		case 'in-progress':
			return 'In Progress'
		case 'completed':
			return 'Completed'
	}
}

export const mockUser = (): User => {
	return {
		id: 'maw3o4jva9wo3n4acwer',
		displayName: 'Inumaki Toge',
		username: 'onigiri',
		avatarURL: 'https://avatars.githubusercontent.com/u/62807269?v=4',
	}
}

export const mockTasks = (status: Status): Task[] => [
	{
		id: 'ian3va0ps34vaw34vawef',
		title: 'Photo Profile Instagram',
		description: 'I want to make a cool profile picture for instagram',
		creater: mockUser(),
		status: status,
		labels: ['Instagram'],
	},
	{
		id: '34aiova93bna4vaseiraw',
		title: 'Onigiri',
		description: 'Okaka, shake, tsuna, takana',
		creater: mockUser(),
		status: 'backlog',
		labels: ['Onigiri'],
	},
]

export const getBaseUrl = () => {
	let url =
		process?.env?.NEXT_PUBLIC_SITE_URL ??
		process?.env?.NEXT_PUBLIC_VERCEL_URL ??
		'https://localhost:3000'
	url = url.includes('http') ? url : `https://${url}`
	url = url.endsWith('/') ? url : `${url}/`
	return url
}

export const noAuthPaths = ['/', '/login', '/register']
