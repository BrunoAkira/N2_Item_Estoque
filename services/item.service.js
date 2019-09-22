var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('item');

var service = {};
service.createItem = createItem;
service.getallItem = getallItem;
//service.getById = getById;
service.delete = deleteItem;

module.exports = service;

function getallItem(user)
{
    var deferred = Q.defer();
    let query = {
        userid: user
    }
    db.item.find(query).toArray(function (err, doc)
    {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(doc);
    }
    )
    return deferred.promise;
} 



function createItem(Item) 
{
    var query = {
        cod_item: Item.cod_item
    }
    var deferred = Q.defer();
    
    db.item.findOneAndUpdate(
        query,
        Item, 
        {upsert: true},
        function (err, doc) 
        {
            if (err)
                    deferred.reject(err.name + ': ' + err.message);
            deferred.resolve();
        }
    );
    return deferred.promise;
}


 function deleteItem(_id) {
    var deferred = Q.defer();
    db.item.remove(
        { _id: mongo.helper.toObjectID(_id)
         },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}

