const express = require('express')
const todoRoutes = express.Router()
const Todo = require('../models/todo')

todoRoutes.route('/')
    .get((req, res) => {
        Todo.find((err, todos) => {
            if (err) return res.status(500).send(err)
            res.status(200).send(todos)
        })
    })
    .post((req, res) => {
        const todo = new Todo(req.body)
        todo.save((err, savedTodo) => {
            if (err) return res.status(500).send(err)
            res.status(201).send(savedTodo)
        })
    })

todoRoutes.route('/:id')
    .get((req, res) => {
        Todo.findById(req.params.id, (err, foundTodo) => {
            if (err) return res.status(500).send(err)
            res.status(200).send(foundTodo)
        })
    })
    .put((req, res) => {
        Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            (err, updatedTodo) => {
                if (err) return res.status(500).send(err)
                res.status(200).send(updatedTodo)
            }
        )
    })
    .delete((req, res) => {
        Todo.findByIdAndRemove(req.params.id, (err, removedTodo) => {
            if (err) return res.status(500).send(err)
            res.status(200).send({message: "Todo was successfully deleted", removedTodo})
        })
    })

module.exports = todoRoutes