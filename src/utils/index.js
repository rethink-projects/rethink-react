const handleStrings = (fn, string) => {
  const text = fn.trim(string)
  const end = fn.upperFirst(text)
  return end
}

module.exports = { handleStrings }
