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

module.exports = { handleStrings, handleScreenName }
