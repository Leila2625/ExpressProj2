import express from 'express'

import { pets_router } from './routers/pets.users.js'
import { user_router } from './routers/user.router.js'

const app = express()

app.use(express.static('public'))
app.use(express.json()) 

app.use(express.urlencoded({extended: true}))

app.use('/api/users', user_router)
app.use('/api/pets', pets_router)


app.listen(3000, () => {
    console.log("Escuchando por el puerto 3000 :) ");
})