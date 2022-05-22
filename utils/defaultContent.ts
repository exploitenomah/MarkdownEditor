const fs = require('fs')
const path = require('path')


const defaultContentDir = path.join(process.cwd(), 'assets')

export const getDefaultContent: Function = function() {
  const file = fs.readdirSync(defaultContentDir)[0]
  const fileName = file.replace(/\.md$/, '')
  const fileContent = fs.readFileSync(path.join(defaultContentDir, file), 'utf8')
  return {name: fileName, content: fileContent, id: 'default', extension: 'md'}
}

