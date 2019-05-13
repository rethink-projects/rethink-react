const { handleStrings } = require('../utils')
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
      error(Locale.component.name)
      return
    }

    const pathExists = await filesystem.existsAsync(PATH)
    let result
    if (pathExists === 'dir') {
      result = await confirm(Locale.component.exists)
      if (!result) {
        info(Locale.component.change)
        return
      }
    }

    await generate({
      template: 'component.js.ejs',
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
      success(`${Locale.component.override} ${name} Component 🙈`)
    } else {
      success(
        `${Locale.component.done} ${name} Module in about ${timer()} ms. ⏰`
      )
    }
  }
}
