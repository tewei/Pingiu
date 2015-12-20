Meteor.subscribe('chatrooms');

Template.ChatsList.helpers({
    chatrooms: function(){
        return Chatrooms.find({members: Meteor.userId()}, {$sort: {timestamp: -1}});
    }
});

