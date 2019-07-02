const { handleStrings } = require('../utils')
const { Locale } = require('../locale')

module.exports = {
  name: 'create-module',
  alias: ['cm'],
  run: async toolbox => {
    const {
      parameters,
      strings,
      filesystem,
      system,
      prompt: { confirm },
      template: { generate },
      print: { success, error, info, warning, spin }
    } = toolbox

    const name = handleStrings(strings, parameters.first)
    const PATH = `${filesystem.cwd()}/src/modules/${name}`
    const timer = system.startTimer()

    if (!name) {
      error(Locale.module.name)
    }

    const pathExists = await filesystem.existsAsync(PATH)
    let result
    if (pathExists === 'dir') {
      result = await confirm(Locale.module.exists)
      if (!result) {
        info(Locale.module.change)
        return
      }
    }

    // Module Screen
    await generate({
      template: 'module-screen.js.ejs',
      target: `src/modules/${name}/screens/${name}Screen.js`,
      props: { name }
    })

    // Module Components
    await generate({
      template: 'module-components.js.ejs',
      target: `src/modules/${name}/components/index.js`,
      props: { name }
    })

    // Styles
    await generate({
      template: 'styles.js.ejs',
      target: `src/modules/${name}/screens/${name}ScreenStyle.js`
    })


    if (result) {
      success(Locale.module.success_overrided)
    } else {
      success(Locale.module.success)
    }
  }
}
