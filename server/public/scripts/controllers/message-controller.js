const messageController = app.controller('MessageController', ['MessageService', function(MessageService){
    
    let self = this;

    self.newMessage = MessageService.newMessage;
    self.messages = MessageService.messages;

    self.getMessages = MessageService.getMessages;
    self.sendMessage = MessageService.sendMessage

    self.getMessages();

}])