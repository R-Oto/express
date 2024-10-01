import express from 'express'
import { createRoute, deleteRoute, getRoute, getRoutes, updateRoute } from '../controllers/controller.js'
const router = express.Router()

router.get('/', getRoutes)
router.post('/', createRoute)
router.get('/:id', getRoute)
router.put('/:id', updateRoute)
router.delete('/:id', deleteRoute)

export default router;