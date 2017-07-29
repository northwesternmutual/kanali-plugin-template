function createPrompt (name, message, value, validate) {
  return {
    type: 'input',
    name,
    message,
    validate,
    default: value,
    store: true
  }
}

function title (string) {
  if (typeof string !== 'string') return ''
  if (string.length === 0) return ''
  if (string.length < 2) return string.toUpperCase()
  return `${string.charAt(0).toUpperCase()}${string.substr(1).toLowerCase()}`
}

exports.get = () => {
  return [
    createPrompt('vcs', 'vcs', 'github.com', input => !input.match(/[ ]+/gm) ? true : 'vcs cannot contain spaces'),
    createPrompt('user', answers => `${answers.vcs} username`, 'frankgreco'),
    createPrompt('plugin', 'plugin name', 'name', input => input.match(/^[A-Za-z]+$/gm) ? true : 'plugin must conform to the regex \'^[A-Za-z]+$\'')
  ]
}

exports.getValues = promptAnswers => {
  return {
    vcs: promptAnswers.vcs,
    repo: promptAnswers.user,
    pluginInternal: promptAnswers.plugin.toLowerCase(),
    pluginExternal: title(promptAnswers.plugin)
  }
}
