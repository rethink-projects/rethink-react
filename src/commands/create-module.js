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
    // Actions
    await generate({
      template: 'module-actions.js.ejs',
      target: `src/modules/${name}/actions/index.js`,
      props: { name }
    })
    // Combine Reducer
    await generate({
      template: 'module-reducers-index.js.ejs',
      target: `src/modules/${name}/reducers/index.js`,
      props: { name }
    })
    // Reducer
    await generate({
      template: 'module-reducers.js.ejs',
      target: `src/modules/${name}/reducers/${name}Reducer.js`,
      props: { name }
    })
    //
    await generate({
      template: 'styles.js.ejs',
      target: `src/modules/${name}/screens/${name}ScreenStyle.js`
    })

    // Actions Types
    await generate({
      template: 'types.js.ejs',
      target: `src/modules/${name}/types/index.js`
    })

    if (result) {
      success(Locale.module.success_overrided)
    } else {
      success(Locale.module.success)
    }
  }
}
