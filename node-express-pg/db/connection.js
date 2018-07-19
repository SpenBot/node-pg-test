//////// DEPENDENCIES, CONFIGURATIONS ////////

const { Pool } = require('pg')
const config = require('../cfg/config.js')




//////// DATABASE CONNECTION ////////

const pool = new Pool({
  connectionString: config.POSTGRES_URL,
  max: config.MAX_CON
})

pool.connect((err, client) => {
    if (err) {
      console.log('\n\t Database Connection Error: \n', err.stack)
      client.release()
      pool.end()
    } else {
      console.log('\n\t Database Connection Successful:', client.database)
    }
})



//////// EXPORT MODULE ////////

module.exports = pool




// END
