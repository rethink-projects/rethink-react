const { handleStrings, getComponentTemplate } = require('../utils')
const { Locale } = require('../locale')

module.exports = {
  name: 'create-component',
  alias: ['cc'],
  run: async toolbox => {
    const {
      parameters,
      strings,
      filesystem,
      system,
      prompt: { confirm },
      template: { generate },
      print: { success, error, info, warning }
    } = toolbox
    const name = handleStrings(strings, parameters.first)
    const PATH = `${filesystem.cwd()}/src/components/${name}`
    const timer = system.startTimer()
    if (!name) {
      error(Locale.needName)
      return
    }

    const pathExists = await filesystem.existsAsync(PATH)
    let result
    if (pathExists === 'dir') {
      result = await confirm(Locale.componentExists)
      if (!result) {
        info(Locale.changeName)
        return
      }
    }

    await generate({
      template: getComponentTemplate(parameters.options),
      target: `src/components/${name}/${name}.js`,
      props: { name }
    })

    await generate({
      template: 'index.js.ejs',
      target: `src/components/${name}/index.js`,
      props: { name }
    })

    await generate({
      template: 'styled.js.ejs',
      target: `src/components/${name}/styled.js`
    })

    await generate({
      template: 'test.js.ejs',
      target: `src/components/${name}/${name}.test.js`,
      props: { name }
    })

    if (result) {
      success(`${Locale.overrideComponent} ${name} Component 🙈`)
    } else {
      success(
        `${Locale.doneComponent} ${name} Module in about ${timer()} ms. ⏰`
      )
    }
  }
}
