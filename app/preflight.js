let fs = require('fs')
let cmd = require('command-exists').sync

function isGoInstalled () {
  return cmd('go')
}

function isMakeInstalled () {
  return cmd('make')
}

function isDepToolInstalled (tool) {
  return cmd(tool)
}

function isGOPATH () {
  return process.env.GOPATH && fs.lstatSync(process.env.GOPATH).isDirectory()
}

exports.execute = () => {
  var errors = []

  if (!isGoInstalled()) {
    errors.push('go not installed or not in PATH')
  }

  if (!isDepToolInstalled('glide')) {
    errors.push('glide not installed or not in PATH')
  }

  if (!isMakeInstalled()) {
    errors.push('make not installed or not in PATH')
  }

  if (!isGOPATH()) {
    errors.push('GOPATH not properly configured')
  }

  return errors
}
