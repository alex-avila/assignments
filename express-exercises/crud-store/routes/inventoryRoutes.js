const express = require('express')
const inventoryRoutes = express.Router()
const Inventory = require('../models/inventory')

inventoryRoutes.route('/')
    .get((req, res) => {
        Inventory.find((err, inventory) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(inventory)
        })
    })
    .post((req, res) => {
        newInventory = new Inventory(req.body)
        newInventory.save((err, savedInventory) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(savedInventory)
        })
    })

inventoryRoutes.route('/:id')
    .get((req, res) => {
        Inventory.findById(req.params.id, (err, foundInventory) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundInventory)
        })
    })
    .put((req, res) => {
        Inventory.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true},
            (err, updatedInventory) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedInventory)
            }
        )
    })
    .delete((req, res) => {
        Inventory.findByIdAndRemove(req.params.id, (err, removedInventory) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(removedInventory)
        })
    })

module.exports = inventoryRoutes