const { readdirSync, writeFileSync } = require('fs')
const path = require('path')

try {
	let content = ''
	const components = readdirSync(
		path.resolve(__dirname, '..', 'app', 'components')
	).filter(each => each !== 'index.ts')
	for (const component of components) {
		console.log(`Found component: ${component}`)
		const exportStatement = `export { default as ${component} } from './${component}/${component}'\n`
		content += exportStatement
	}
	writeFileSync(
		path.resolve(__dirname, '..', 'app', 'components', 'index.ts'),
		content
	)
} catch (error) {
	console.error(error)
}
