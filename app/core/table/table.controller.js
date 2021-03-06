(function () {
    'use strict';

    angular.module('app.table', ['app.service'])

        .controller('TableController', TableController);


    function TableController($scope,$state,AuthService) {
        var vm = $scope;
        vm.table = []
        AuthService.progressLogin({
            strategy: 'jwt',
            accessToken: localStorage.getItem("jwt")
        }).then(function(res) {
            if(!res){
                $state.go("login")
            } else {
                vm.user = feathersAuth.get('user')
                console.log("user ",vm.user);
                socket.emit('messages::find',{$limit: 10000}, function(error, data) {
                    console.log('Found all messages', data);
                    vm.table = data.data
                    $scope.$apply();
                    $('.c-table').bootstrapTable({

                        search:true,
                        sidePagination: 'client',
                        pageSize: 10,
                        pagination: true,
                        showToggle: true,
                        showRefresh: true,
                        showColumns: true,
                        columns: [{
                            title: 'ID',
                            sortable: true,
                            field: '_id',
                            sortName: '_id',
                        }, {
                            title: 'Text',
                            sortable: true,
                            field: 'text',
                            sortName: 'text',
                        }, {
                            title: 'Created at',
                            sortable: true,
                            field: 'createdAt',
                            sortName: 'createdAt'
                        }],
                        data: vm.table
                    });

                });
            }
        });
        feathersAuth.service('messages')
            .on('created', function(message) {
                console.log('New message created', message)
                vm.table.push(message)
                $scope.$apply()
            });


    }
})();
