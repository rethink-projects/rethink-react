const { handleStrings, handleScreenName } = require('../utils')
const { Locale } = require('../locale')

module.exports = {
  name: 'create-screen',
  alias: ['cs'],
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
    const { options } = parameters;
    const moduleOption = options.m || options.module;

    const name = handleScreenName(strings, parameters.first);
    const moduleName = handleStrings(strings, moduleOption);
    const MODULE_PATH = `${filesystem.cwd()}/src/modules/${moduleName}`;
    const PATH = `${filesystem.cwd()}/src/modules/${moduleName}/screens/${name}.js`;
    const timer = system.startTimer();

    if (!name) {
      error(Locale.screen.name);
      return;
    }
    if (!moduleOption) {
      error(Locale.module.name);
      return;
    }

    const modulePathExists = await filesystem.existsAsync(MODULE_PATH);
    if(!modulePathExists) {
      error(Locale.screen.shouldExistModule);
      return;
    }

    const pathExists = await filesystem.existsAsync(PATH);
    let result
    if (pathExists === 'file') {
      result = await confirm(Locale.screen.exists);
      if (!result) {
        info(Locale.screen.change)
        return
      }
    }

    // Module Screen
    await generate({
      template: 'module-screen.js.ejs',
      target: `src/modules/${moduleName}/screens/${name}.js`,
      props: { name }
    })

    if (result) {
      success(`${Locale.screen.override} ${name} Screen Take only`)
    } else {
      success(`${Locale.screen.done} ${name} Screen in about ${timer()} ms. ⏰`)
    }
  }
}
