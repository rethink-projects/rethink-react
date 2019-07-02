const { handleStrings } = require('../utils')
const { Locale } = require('../locale')

module.exports = {
  name: 'create-reducer',
  alias: ['cr'],
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
    const PATH = `${filesystem.cwd()}/src/store/reducers/${name}`
    const timer = system.startTimer()

    if (!name) {
      error(Locale.reducer.name)
    }

    const pathExists = await filesystem.existsAsync(PATH)
    let result
    if (pathExists === 'dir') {
      result = await confirm(Locale.reducer.exists)
      if (!result) {
        info(Locale.reducer.change)
        return
      }
    }

    // Actions
    await generate({
      template: 'module-actions.js.ejs',
      target: `src/store/reducers/${name}/actions.js`,
      props: { name }
    })

    // Actions Test
    await generate({
      template: 'actions-test.js.ejs',
      target: `src/store/reducers/${name}/actions.test.js`,
      props: { name }
    })

    // Reducer
    await generate({
      template: 'module-reducers.js.ejs',
      target: `src/store/reducers/${name}/reducer.js`,
      props: { name }
    })

    // Reducer
    await generate({
      template: 'reducer-test.js.ejs',
      target: `src/store/reducers/${name}/reducer.test.js`,
      props: { name }
    })

    // Types
    await generate({
      template: 'types.js.ejs',
      target: `src/store/reducers/${name}/types.js`
    })

    if (result) {
      success(Locale.reducer.success_overrided)
    } else {
      success(Locale.reducer.success)
    }
  }
}
