import type { Preview } from '@storybook/react'

const preview: Preview = {
	parameters: {
		backgrounds: {
			values: [
				{ name: 'primary', value: '#1f2029' },
				{ name: 'secondary', value: '#272a34' },
			],
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
