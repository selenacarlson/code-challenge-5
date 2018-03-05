const app = angular.module('myApp', []);

const messageController = app.controller('MessageController', ['$http', function($http){
    let self = this;
    self.newMessage = {};
    self.messages = { list: [] }

    self.getMessages = function(){
        $http({
            method: 'GET',
            url: '/messages'
        }).then(function(res){
            self.messages.list = res.data;
        }).catch(function(error){
            console.log('error on get', error);
        })
    }

    self.sendMessage = function(newMessage){
        $http({
            method: 'POST',
            url: '/messages',
            data: newMessage
        }).then(function(res){
            self.getMessages();
        }).catch(function(error){
            console.log('error on post');
        })
    }

    self.getMessages();

}])