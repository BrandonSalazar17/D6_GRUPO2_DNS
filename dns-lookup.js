const dns = require('dns')
const inputText = process.argv[2]

dns.lookup('facebook.com', (err,address, family) => {
    console.log('address: ' + address + '  family: ' + family)
})

