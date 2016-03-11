import { Router } from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import fs from 'fs'
import request from 'superagent'

const router = Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', (req, res) => {
  res.sendFile('index.html')
})

router.get('/canvas', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/canvas.html'))
})

router.get('/market', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/market.html'))
})

router.get('/market/paintings', urlencodedParser, function (req, res) {
    // console.log("REQ", req)
    var jsonPath = path.join(__dirname, '../data/db.json')
    console.log(jsonPath)
    fs.readFile(jsonPath, 'utf8', function (err, data){
        console.log(data)
    })
  })

export default router
