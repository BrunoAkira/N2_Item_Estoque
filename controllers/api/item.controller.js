var config = require('config.json');
var express = require('express');
var router = express.Router();
var itemService = require('services/item.service');

// routes
router.post('/create', createItem);
//router.put('/update', updateItem);
//router.delete('/:_id', deleteItem);
//router.get('/', getallItem);
//router.get('/:_id', getById);

module.exports = router;

function createItem(req, res) {
    itemService.createItem(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


/* function updateItem(req, res) {
    var itemId = req.session.userId;
    if (req.params._id !== userId) {
        // can only update own account
        return res.status(401).send('You can only update your own account');
    }

    userService.update(userId, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
*/ 
/*
function deleteItem(req, res) {
    var userId = req.session.userId;
    if (req.params._id !== userId) {
        // can only delete own account
        return res.status(401).send('You can only delete your own account');
    }

    userService.delete(userId)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}*/