const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items = '/'
// @desc  GET All Items
// @acess Public
router.get('/', (req, res) => {
    Item.find()
        .sort( {date: -1})  // Lists items in decending order
        .then(items => res.json(items))
});

// @route POST api/items = '/'
// @desc  Create A Item
// @acess Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name : req.body.name
    });

    newItem.save().then(item => res.json(item));

});

// @route DELETE api/items = '/'
// @desc  Delete an Item
// @acess Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json ({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;