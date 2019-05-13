const handleStrings = (fn, string) => {
  const text = fn.trim(string)
  const end = fn.upperFirst(text)
  return end
}

const helpMessage = [
  ['Command', 'Shorthand', 'Description'],
  ['create-component', 'cc', 'Create a Component at src/components/ \n-> Options: \n  -pure for PureComponent \n  -stateless for Stateless \n  -web for Web (can be used with previous)'],
  ['create-module', 'cm', 'Create a Module at modules/'],
  ['create-screen', 'cs', 'Create a Screen at (Module)/ \n-> Example: create-screen (Screen) -m (Module)'],
  ['store-redux', 'sr', 'Create a Store at src/'],
];


module.exports = { handleStrings, helpMessage }
