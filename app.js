const express = require('express')
const fallback = require('express-history-api-fallback')
const exec = require('child_process').exec
const app = express()
const port = 3000

app.use('/', express.static( 'client/dist'))
app.use(fallback('index.html', { root: 'client/dist' }))

if (process.env.NODE_ENV === 'production') {
    const options = { cwd: `${process.cwd()}/client`, maxBuffer: 1024 * 500 }
    exec(`NODE_ENV=${process.env.NODE_ENV} npm run build`, options, (err, results) => {
        console.log(results)
    })
}

app.listen(port, () => {
    console.log(`one-product app listening at http://localhost:${port}`)
})