const { build } = require('gluegun')
const { helpMessage } = require('./utils');

/**
 * Create the cli and kick it off
 */
async function run (argv) {
  // create a CLI runtime
  const cli = build()
    .brand('rethink-react')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'rethink-react-*', hidden: true })
    .help({
      name: 'help',
      alias: '--h',
      hidden: true,
      dashed: true,
      run: toolbox => toolbox.print.table(
        helpMessage,
        { format: 'lean' }
      )
    })
    .version() // provides default for version, v, --version, -v
    .create()

  // and run it
  const toolbox = await cli.run(argv)

  // send it back (for testing, mostly)
  return toolbox
}

module.exports = { run }
