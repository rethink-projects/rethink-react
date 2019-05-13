const handleStrings = (fn, string) => {
  const trim = fn.trim(string)
  const pascal = fn.pascalCase(trim)
  const text = fn.upperFirst(pascal)
  return text
}

module.exports = { handleStrings }
