!(function() {
    let key = ''

    // setting environment variables
    const cfg = {
      PORT: process.env.PORT,
      POSTGRES_URL: process.env.POSTGRES_URL,
      MAX_CON: process.env.MAX_CON
    }

    console.log('\n\t *** running config start *** \n')

    for (key in cfg) {
        console.log(key + ': ' + cfg[key])
    }

    console.log('\n\t *** running config end *** \n')

    module.exports = cfg
})()
