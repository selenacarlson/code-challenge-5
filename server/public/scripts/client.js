const app = angular.module('myApp', []);

const messageController = app.controller('MessageController', ['$http', function($http){
    console.log('mc')

}])