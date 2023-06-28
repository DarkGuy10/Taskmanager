import type { Meta, StoryObj } from '@storybook/react'
import InputField from './InputField'

const meta: Meta<typeof InputField> = {
	component: InputField,
}

export default meta

type Story = StoryObj<typeof InputField>

export const Text: Story = {
	args: {
		type: 'text',
		label: 'Email address',
		placeholder: 'InumakiToge@jjk.jp',
	},
}

export const TextWithIcon: Story = {
	args: {
		type: 'text',
		placeholder: 'Search project, name...',
		iconUrl: '/svg/search.svg',
	},
}

export const TextWithValidation: Story = {
	args: {
		type: 'text',
		label: 'Validation example',
		placeholder: 'Start typing...',
		validator(value) {
			return value.length >= 3 && value.length <= 32
		},
		errorMessage: 'Length should be between 3 and 32',
	},
}

export const Password: Story = {
	args: {
		type: 'password',
		label: 'Password',
		iconUrl: '/svg/key.svg',
		validator(value) {
			return value.length >= 6
		},
		errorMessage: 'Password should be longer than 6 characters.',
	},
}
