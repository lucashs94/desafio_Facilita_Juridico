import { Router } from 'express'

import { getClients } from './controllers/getClients-controller'
import { createClient } from './controllers/createClient-controller'
import { calculateRoute } from './controllers/calculateRoute-controller'
import { deleteClient } from './controllers/deleteClient-controller'

export const router = Router()

router.get('/clients', getClients)
router.post('/clients', createClient)
router.get('/clients/route', calculateRoute)
router.delete('/clients/:id', deleteClient)
