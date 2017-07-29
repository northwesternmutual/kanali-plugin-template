let chalk = require('chalk')
let leftpad = require('left-pad')

let BAR = '====================================================================='

exports.prompt = () => {
  return '\n' +
         chalk.blue(BAR) +
         '\n' +
         chalk.gray(leftpad('Go workspaces like to be created a certain way', 57)) +
         '\n' +
         `${chalk.gray(leftpad(`(e.g. `, 9))}${chalk.green(`$GOPATH/src/github.com/frankgreco/kanali-plugin-template`)}${chalk.gray(`)`)}` +
         '\n' +
         chalk.gray(leftpad('To do this, let\'s get some information about your plugin', 63)) +
         '\n' +
         chalk.blue(BAR) +
         '\n'
}

exports.write = () => {
  return '\n' +
         chalk.green(BAR) +
         '\n' +
         chalk.gray(leftpad(`Creating your workspace...`, 49)) +
         '\n' +
         chalk.green(BAR)
}

exports.init = errors => {
  var message = '\n' +
                chalk.yellow(BAR) +
                '\n' +
                `${chalk.gray(leftpad(`Welcome to`, 27))}${chalk.bold.blue(` Kanali's plugin generator`)}!` +
                '\n' +
                chalk.gray(`${leftpad('', 7)}This Yeoman generator aims to scaffold a Kanali plugin.`) +
                '\n'

  errors.forEach((error, index) => {
    message += `\n${chalk.red(leftpad(`[ERROR] ${error}`, 22 + error.length))}`
  })

  message += errors.length > 0
      ? `\n\n${chalk.white(leftpad(`Please fix the above errors and try again`, 55))}\n`
      : `${chalk.white(leftpad(`Let's get started!`, 43))}\n`

  message += chalk.yellow(BAR)

  return message
}

exports.end = params => {
  return chalk.magenta(BAR) +
         '\n' +
         chalk.gray(leftpad(`You're almost done! Your workspace has been created here:`, 63)) +
         '\n' +
         chalk.white.bold(leftpad(`$GOPATH/src/${params.vcs}/${params.user}/kanali-plugin-${params.plugin.toLowerCase()}/`, 62)) +
         '\n' +
         chalk.gray(leftpad(`To complete your setup, run the following commands in your workspace:`, 55)) +
         '\n' +
         chalk.white(leftpad('$ ', 25)) + chalk.cyan(`make install_ci`) +
         '\n' +
         chalk.white(leftpad('$ ', 25)) + chalk.cyan(`make kanali-plugin-${params.plugin.toLowerCase()}`) +
         '\n' +
         chalk.magenta(BAR)
}
