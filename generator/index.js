module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      start: "vue-cli-service serve --open"
    },
    dependencies: {
      "mdbvue": "^5.4.1"
    }
  })

  if (options.defaultApp === 0) {
    api.render('./templates/default')
  } else {
    api.render('./templates/demo')
  }

  api.render('./config')

}