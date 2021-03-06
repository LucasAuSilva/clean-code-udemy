import paths from './paths'
import schemas from './schemas'
import components from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Code Udemy',
    description: 'Project develop in Node.JS for explain advanced concepts in programming like TDD, Clean Architecture, Design Patterns and SOLID',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Account'
  }, {
    name: 'Survey'
  }],
  paths,
  schemas,
  components
}
