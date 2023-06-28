import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
	stories: ['../app/components/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config, { configType }) => {
		if (!config.resolve) return config
		config.resolve.alias = {
			...config.resolve.alias,
			'@/components': path.resolve(__dirname, '../app/components'),
			'@/styles': path.resolve(__dirname, '../app/styles'),
			'@/lib/*': path.resolve(__dirname, '../lib'),
		}
		return config
	},
	staticDirs: ['../public'],
}
export default config