Meteor.subscribe('chatrooms');

Template.ChatList.helpers({
    chatrooms: function(){
        return Chatrooms.find({});
    }
});

