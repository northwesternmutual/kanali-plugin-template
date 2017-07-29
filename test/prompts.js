let assert = require('yeoman-assert')
let prompts = require('../app/prompts')

describe('prompts', () => { // eslint-disable-line
  it('getValues', () => { // eslint-disable-line
    assert.deepEqual(prompts.getValues({
      vcs: 'github.com',
      user: 'frankgreco',
      plugin: 'plugin'
    }), {
      vcs: 'github.com',
      repo: 'frankgreco',
      pluginInternal: 'plugin',
      pluginExternal: 'Plugin'
    }, 'return values do not match expected')
  })
})
