import { Router } from 'express'
import path from 'path'
const router = Router()

router.get('/', (req, res) => {
  res.sendFile('index.html')
})

router.get('/canvas', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/canvas.html'))
})

router.get('/market', (req, res) => {
  res.send(path.join(__dirname, '../public/market.html'))
})

export default router
