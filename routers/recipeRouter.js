const { response } = require('express');
const express = require('express');
const db = require('../models/db_model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getRecipes()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: 'error retrieving data', error: err });
        });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    db.getShoppingList(id)
        .then((response) => {
            if (id) {
                res.status(200).json(response);
            } else {
                res.status(404).json({ message: 'id not found' });
            };
        })
        .catch(err => {
            res.status(500).json({ message: 'error retrieving data', error: err });
        });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    db.getInstructions(id)
        .then((response) => {
            if (id) {
                res.status(200).json(response);
            } else {
                res.status(404).json({ message: 'id not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'unable to retrieve data', error: err });
        });
});

module.exports = router;