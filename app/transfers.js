exports.get = params => {
  return [
    createTransfer('.gitignore'),
    createTransfer('glide.lock'),
    createTransfer('glide.yaml'),
    createTransfer('Makefile'),
    createTransfer('scripts/cover.sh'),
    createTransfer('plugin.go', `${params.pluginInternal}.go`),
    createTransfer('plugin_test.go', `${params.pluginInternal}_test.go`),
    createTransfer('README.md')
  ]
}

function createTransfer (from, to) {
  return {
    from,
    to: to || from
  }
}
