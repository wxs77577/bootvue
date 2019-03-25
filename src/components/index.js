const requireComponents = require.context('../../packages', true, /\.vue$/)
const components = {}

requireComponents.keys().map(key => {
  let name = String(key).split('/').pop().replace('.vue', '')
  components[name] = requireComponents(key)
})

export default components