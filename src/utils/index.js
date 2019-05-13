const handleStrings = (fn, string) => {
  const text = fn.trim(string)
  const end = fn.upperFirst(text)
  return end
}

const handleScreenName = (fn, string) => {
  const text = fn.trim(string);
  const end = fn.upperFirst(text);
  return end.indexOf("Screen") === -1 ? `${end}Screen` : end;
}

const getComponentTemplate = (options = {}) => {
  const { pure, stateless } = options;
  if (pure) return 'component-pure.js.ejs';
  else if (stateless) return 'component-stateless.js.ejs';
  return 'component.js.ejs';
}

module.exports = { handleStrings, handleScreenName, getComponentTemplate }
