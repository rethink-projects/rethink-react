const handleStrings = (fn, string) => {
  const trim = fn.trim(string)
  const toLower = fn.lowerCase(trim)
  const text = fn.upperFirst(toLower)
  return text
}

module.exports = { handleStrings }
