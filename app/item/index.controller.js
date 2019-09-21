(function () {
    'use strict';

    angular
        .module('app')
        .controller('item.IndexController', Controller);

    function Controller($window, ItemService, FlashService) {
        var vm = this;

        vm.item= null;
        vm.saveItem = saveItem;
        //vm.deleteItem = deleteItem;

        initController();

        function initController()
         {
            // get current user
           // UserService.GetCurrent().then(function (user) {
            //    vm.user = user;
            //});
        }
     

        function saveItem() {
            let item = {
                cod_item: vm.item.cod_item,
                data:vm.item.data,
                tipo:vm.item.tipo,
                marca: vm.item.marca, 
                caracteristicas: vm.item.caracteristicas,
                tamanho: vm.item.tamanho, 
                cor: vm.item.cor, 
                valor_etiqueta: vm.item.valor_etiqueta,
                valor_compra: vm.item.valor_compra , 
                valor_margem: vm.item.valor_compra, 
                valor_sugerido: vm.item.valor_sugerido
            };

            ItemService.Create(item)
                .then(function () {
                    FlashService.Success('Item Inserido');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        /*function deleteUser() {
            UserService.Delete(vm.user._id)
                .then(function () {
                    // log user out
                    $window.location = '/login';
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }*/
    }

})();