Meteor.subscribe('messages');
Meteor.subscribe('chatrooms');

Template.Chatroom.helpers({
    messages: function(){
        var roomId = FlowRouter.getParam('roomId');
        return Messages.find({roomId: roomId}, {$sort: {timestamp: -1}});
    },
    room: function(){
        var roomId = FlowRouter.getParam('roomId');
        return  Chatrooms.findOne({_id: roomId});
    }
});

Template.NewMessage.events({
    'submit .new-message': function(event){
        event.preventDefault();
        var text = event.target.text.value;
        var roomId = FlowRouter.getParam('roomId');
        var room = Chatrooms.findOne({_id: roomId});
        if(room.active){
            Meteor.call('newMessage', {roomId: roomId, author: Meteor.userId(), text: text});
            event.target.text.value = "";
        }
    }
});

Template.registerHelper("timestampToTime", function(timestamp){
    var date = new Date(timestamp);
    var hours = "0" + date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours.substr(minutes.length-2) + ':' + minutes.substr(minutes.length-2);
});