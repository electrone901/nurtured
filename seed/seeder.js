var db = require('../models/index')

// app.use(apiRouter)
db.sequelize.sync().then(function() {
   console.log('seeding complete')
})