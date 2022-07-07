// const defaults = require('./utils/defaults')

console.log('This is a customized version of the npm init command, written and maintained by 4lch4.')

module.exports = {
  name: prompt('package name', package.name),
  displayName: prompt('package display name', package.displayName),
  version: prompt('version', package.version),
  description: prompt('description', package.description),
  main: prompt('entry point', package.main),
  type: prompt('type', 'module'),
  // Tapas Adhikary <tapas.adhikary@gmail.com> (https://tapasadhikary.com)
  // author: prompt(
  //   'author',
  //   'Devin W. Leaman <Devin.Leaman@jbhunt.com> (https://www.jbhunt.com)'
  // ),
  author: {
    name: prompt('author name', 'Devin W. Leaman (jisodl0)'),
    email: prompt('author email', 'Devin.Leaman@jbhunt.com'),
    url: prompt('author url', 'https://www.jbhunt.com')
  },
  type: prompt('type', 'module'),
  license: prompt('license', 'MIT'),
  repository: prompt('github repository url', '')
}
