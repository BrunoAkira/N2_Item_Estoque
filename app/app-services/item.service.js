(function () {
    'use strict';

    angular
        .module('app')
        .factory('ItemService', Service);

    function Service($http, $q) {
        var service = {};

       service.GetAll = GetAll;
        //service.GetById = GetById;
        service.Create = Create;
        //service.Update = Update;
        service.Delete = Delete;
        return service;

       
/*
        function GetById(_id) {
            return $http.get('/api/item/' + _id).then(handleSuccess, handleError);
        }

        function Update(item) {
            return $http.put('/api/item/update', item ).then(handleSuccess, handleError);
        }      
*/
        function Delete(_id) {
            return $http.delete('/api/item/' + _id).then(handleSuccess, handleError);
        }
        function GetAll(user) {
            return $http.get('/api/item/list/' + user._id).then(handleSuccess, handleError);
        }
        function Create(item) {
            return $http.post('/api/item/create', item).then(handleSuccess, handleError);
        }
        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
