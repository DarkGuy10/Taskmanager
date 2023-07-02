import { Status, Task } from '@/typings'
import { labelText } from '@/utils'
import styles from './StatusPane.module.scss'
import { TaskListItem } from '@/components'
import Image from 'next/image'

interface StatusPaneProps {
	status: Status
	tasks: Task[]
}

export default function StatusPane({ status, tasks }: StatusPaneProps) {
	return (
		<div className={styles.statusPane} data-status={status}>
			<div className={styles.header}>
				{labelText(status)}
				<span className={styles.counter}>{tasks.length}</span>
			</div>
			<div className={styles.list}>
				{tasks.length ? (
					tasks.map((task, index) => <TaskListItem key={index} task={task} />)
				) : (
					<div className={styles.nothingHere}>
						<Image
							src={'/svg/wind.svg'}
							alt="wind-icon"
							height={40}
							width={40}
						/>
						<span>It{"'"}s empty in here</span>
					</div>
				)}
			</div>
		</div>
	)
}
