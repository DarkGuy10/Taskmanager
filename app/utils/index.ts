import { Status } from '@/typings'

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
