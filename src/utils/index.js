const handleStrings = (fn, string) => {
  const text = fn.trim(string)
  const end = fn.upperFirst(text)
  return end
}

const getComponentTemplate = (options = {}) => {
  const { pure, stateless } = options;
  if (pure) return 'component-pure.js.ejs';
  else if (stateless) return 'component-stateless.js.ejs';
  return 'component.js.ejs';
}

module.exports = { handleStrings, getComponentTemplate }
