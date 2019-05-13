const { getComponentTemplate } = require('../utils')
const { Locale } = require('../locale')

module.exports = toolbox => {
  const {
    parameters,
    template: { generate },
    print: { error, success }
  } = toolbox

  async function createComponent(path, name, override = false) {
    if (!name) {
      error(Locale.component.name)
      return
    }

    await generate({
      template: getComponentTemplate(parameters.options),
      target: `${path}/${name}/${name}.js`,
      props: { name }
    })

    await generate({
      template: 'index.js.ejs',
      target: `${path}/${name}/index.js`,
      props: { name }
    })

    await generate({
      template: 'styled.js.ejs',
      target: `${path}/${name}/styled.js`
    })

    await generate({
      template: 'test.js.ejs',
      target: `${path}/${name}/${name}.test.js`,
      props: { name }
    })

    override
      ? success(Locale.component.success_overrided)
      : success(Locale.component.success)
  }
  toolbox.createComponent = createComponent
}
