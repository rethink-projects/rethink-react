const { handleStrings } = require('../utils')
const { Locale } = require('../locale')

module.exports = {
  name: 'create-component',
  alias: ['cc'],
  run: async toolbox => {
    const {
      createComponent,
      parameters,
      strings,
      system: { run },
      print: { success, info },
      prompt: { confirm, ask },
      filesystem: { existsAsync, cwd }
    } = toolbox

    // has flag -m or --module
    const moduleOption = parameters.options.m || parameters.options.module
    const name = handleStrings(strings, parameters.first)

    if (typeof moduleOption === 'undefined') {
      let result
      const COMPONENT_PATH = `${cwd()}/src/components/${name}`
      const componentPathExists = await existsAsync(COMPONENT_PATH)
      if (componentPathExists === 'dir') {
        result = await confirm(Locale.component.exists)
        if (!result) {
          info(Locale.component.change)
          return
        } else {
          await createComponent(`${cwd()}/src/components/`, name, true)
        }
      } else {
        await createComponent(`${cwd()}/src/components/`, name)
      }
    } else {
      let withouModuleName

      const hasModuleName = typeof moduleOption === 'string'
      const moduleName = handleStrings(strings, moduleOption)
      if (!hasModuleName) {
        const askAge = {
          type: 'input',
          name: 'module',
          message: 'Qual nome do modulo'
        }
        withouModuleName = await ask(askAge)
      }
      const namedModule = hasModuleName ? moduleName : withouModuleName.module
      const MODULE_PATH = `${cwd()}/src/modules/${namedModule}/`
      const modulePathExists = await existsAsync(MODULE_PATH)
      if (!modulePathExists) {
        const result = await confirm(Locale.module.notExists)
        if (!result) {
          info(`${Locale.compModule.warning}`)
          return
        } else {
          await run(`rethink-gen cm ${namedModule}`, { trim: true })
          success(Locale.module.success)
        }
      }
      let result
      const PATH = `${cwd()}/src/modules/${namedModule}/components/${name}`
      const pathExists = await existsAsync(PATH)
      if (pathExists === 'dir') {
        result = await confirm(Locale.component.exists)
        if (!result) {
          info(Locale.component.change)
          return
        }
      } else {
        await createComponent(
          `${cwd()}/src/modules/${namedModule}/components/`,
          name
        )
      }
    }
  }
}
