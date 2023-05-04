import { Router } from "express";

const pets = []
const pets_router = Router()

pets_router.get('/', (req, res) => {
    res.send(pets)
})


pets_router.post('/', (req, res) => {
    const newPet = req.body
    pets.push(newPet)
    res.status(201).send(pets)
})


export {pets_router}
