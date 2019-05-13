const { handleStrings } = require('../utils')
const { Locale } = require('../locale')

module.exports = {
  name: 'component-in-module',
  alias: 'cim',
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
    const module = parameters.options.in
    const PATH = `${filesystem.cwd()}/src/modules/${module}`
    const pathExists = await filesystem.existsAsync(PATH)
    const COMP_PATH = `${filesystem.cwd()}/src/modules/${module}/components/${name}`
    const compPathExists = await filesystem.existsAsync(COMP_PATH)

    // Verify if component name exists
    if (!name) {
      error('Component name must be specified 👮‍‍‍‍️')
      return
    }

    // Verify if module name exists
    if (!module) {
      error('Module name must be specified 👮‍‍‍‍️')
      return
    }

    // Verify if module already exists
    if (!pathExists) {
      const result = await confirm('Modulo ainda não existe, deseja cria-lo')
      if (!result) {
        return
      } else {
        await system.run(`rethink-gen cm ${module}`, { trim: true })
        success(`👉  Modulo ${module} criado com sucesso.`)
      }
    }

    // Verify if component already exists
    let result
    if (compPathExists === 'dir') {
      result = await confirm(Locale.component.exists)
      if (!result) {
        info(`${Locale.compModule.warning}`)
        return
      }
    }
    // Create component file
    await generate({
      template: 'component.js.ejs',
      target: `src/modules/${module}/components/${name}/${name}.js`,
      props: { name }
    })
    // Create Index file
    await generate({
      template: 'index.js.ejs',
      target: `src/modules/${module}/components/${name}/index.js`,
      props: { name }
    })

    // Create styled file
    await generate({
      template: 'styled.js.ejs',
      target: `src/modules/${module}/components/${name}/styled.js`
    })

    // Create Test file
    await generate({
      template: 'test.js.ejs',
      target: `src/modules/${module}/components/${name}/${name}.test.js`,
      props: { name }
    })

    if (result) {
      success(`${Locale.compModule.override} ${module} 🙈`)
    } else {
      success(`${Locale.compModule.done} ${module}`)
    }
  }
}
