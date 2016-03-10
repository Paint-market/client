import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.sendFile('index.html')
})

router.get('/canvas', (req, res) => {
  res.sendFile('canvas.html')
})

export default router
