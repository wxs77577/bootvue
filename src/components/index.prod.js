const requireComponents = require.context('../../packages', true, /\.vue$/)
const components = {}

requireComponents.keys().map(key => {
  console.log(key)
  let name = String(key).replace('./', '').replace('.vue', '')
  if (name.includes('fields/')) {
    name = `${name.split('/').pop()}Field`
  }
  components[name] = requireComponents(key)
})

export default components