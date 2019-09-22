var config = require('config.json');
var express = require('express');
var router = express.Router();
var ItemService = require('services/item.service');

// routes
router.post('/create', createItem);
//router.put('/update', updateItem);
router.delete('/:_id', deleteItem);
router.get('/list/:userid', getallItem);
//router.get('/:_id', getById);

module.exports = router;

function createItem(req, res) {
    ItemService.createItem(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function getallItem(req, res) {
    ItemService.getallItem(req.params.userid).then(function (item)
     {
                res.send(item);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });

   }
   function deleteItem(req, res) {
    ItemService.delete(req.params._id).then(function ()
     {
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