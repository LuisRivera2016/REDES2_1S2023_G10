const app = require('./app') // the actual Express application
const config = require('./utils/config') // the configuration file



app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})