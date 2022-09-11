 const e = require('express')
const express = require('express')

 const app = express()
 const PORT = 3000

 app.use(express.static(`dist`))
//  app.get(`/${something}`, (req, res) => {
//     res.status(200).send(`./dist/${something}`)
//  })

 app.listen(PORT, ()=> {
    console.log(`my port ${PORT}!`)
 })

