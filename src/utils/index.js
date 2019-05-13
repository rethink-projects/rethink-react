const handleStrings = (fn, string) => {
  const toUpper = fn.upperCase(string)
  const trim = fn.trim(toUpper)
  const pascal = fn.pascalCase(trim)
  const text = fn.upperFirst(pascal)
  return text
}

const helpMessage = [
  ['Command', 'Shorthand', 'Description'],
  [
    'create-component',
    'cc',
    'Create a Component at src/components/ \n-> Options: \n  --pure for PureComponent \n  --stateless for Stateless \n  -web for Web (can be used with previous)'
  ],
  ['create-module', 'cm', 'Create a Module at modules/'],
  [
    'create-screen',
    'cs',
    'Create a Screen at (Module)/ \n-> Example: create-screen (Screen) -m (Module)'
  ],
  ['store-redux', 'sr', 'Create a Store at src/']
]

const handleScreenName = (fn, string) => {
  const text = fn.trim(string)
  const end = fn.upperFirst(text)
  return end.indexOf('Screen') === -1 ? `${end}Screen` : end
}

const getComponentTemplate = options => {
  const { p, pure, s, stateless } = options
  let value
  if (p || pure || s || stateless) {
    if (options.pure || options.p) {
      value = 'component-pure.js.ejs'
    }
    if (options.s || options.stateless) {
      value = 'component-stateless.js.ejs'
    }
  } else {
    value = 'component.js.ejs'
  }
  return value
}

module.exports = {
  handleStrings,
  handleScreenName,
  helpMessage,
  getComponentTemplate
}
