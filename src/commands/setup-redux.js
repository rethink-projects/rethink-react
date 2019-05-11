module.exports = {
  name: 'store-redux',
  alias: ['sr'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { success, error }
    } = toolbox

    await generate({
      template: 'store-redux.js.ejs',
      target: `src/store/store.js`
    })

    await generate({
      template: 'reducers.js.ejs',
      target: `src/store/reducers.js`
    })
  }
}
