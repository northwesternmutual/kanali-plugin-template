let Generator = require('yeoman-generator')
let prompts = require('./prompts')
let transfers = require('./transfers')
let messages = require('./messages')
let preflight = require('./preflight')

module.exports = class extends Generator {

  initializing () {
    var errors = preflight.execute()
    this.log(messages.init(errors))
    if (errors.length > 0) {
      process.exit(1)
    }
  }

  prompting () {
    this.log(messages.prompt())
    return this.prompt(prompts.get())
  }

  writing () {
    let self = this
    let params = prompts.getValues(this.config.get('promptValues'))
    let basePath = `${process.env.GOPATH}/src/${params.vcs}/${params.repo}/kanali-plugin-${params.pluginInternal}`

    this.log(messages.write())

    transfers.get(params).forEach(file => {
      if (!file) return
      self.fs.copyTpl(
        self.templatePath(file.from),
        self.destinationPath(`${basePath}/${file.to}`),
        params
      )
    })
  }

  end () {
    this.log(messages.end(this.config.get('promptValues')))
  }

}
