import { Router } from "express";

const users = []
const user_router = Router()

user_router.get('/', (req, res) => {
    res.send(users)
})


user_router.post('/', (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.status(201).send(users)
})

export { user_router }
