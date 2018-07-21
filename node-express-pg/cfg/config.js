!(function() {

    // setting environment variables
    const cfg = {
      PORT: process.env.PORT,
      POSTGRES_URL: process.env.POSTGRES_URL,
      MAX_CON: process.env.MAX_CON
    }

    // logging environment configurations
    console.log('\n\n\t Environment Variables Configurations :')

    for (let key in cfg) {
        console.log(`\t\t ${key}: ${cfg[key]}`)
    }

    // export module
    module.exports = cfg
    
})()
