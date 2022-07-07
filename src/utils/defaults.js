const { join } = require('path')
const dotenv = require('dotenv')

const dotEnvPath = join(__dirname, '..', 'defaults.env')

console.debug(`Loading values from ${dotEnvPath}`)

dotenv.config({ path: dotEnvPath })

/**
 * This script exports the default values to be used for the prompts that come
 * with the `npm init` command.
 */
module.exports = {
  version: process.env.NPM_INIT_VERSION || '0.0.0',
  type: process.env.NPM_INIT_PACKAGE_TYPE || 'module',
  main: process.env.NPM_INIT_MAIN || 'dist/index.js',
  author: {
    name: process.env.NPM_INIT_AUTHOR_NAME || '4lch4',
    email: process.env.NPM_INIT_AUTHOR_EMAIL || 'hey@4lch4.email',
    url: process.env.NPM_INIT_AUTHOR_URL || 'https://4lch4.com'
  },
  license: process.env.NPM_INIT_LICENSE || 'MIT',
  scripts: {
    start: 'node ./dist/index.js',
    build: 'tsc',
    pretty: "prettier --write ."
  }
}
