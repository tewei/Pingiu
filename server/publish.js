Meteor.publish('messages', function(){
    return Messages.find({});
});

Meteor.publish('chatrooms', function(){
    return Chatrooms.find({});
});

Meteor.publish('userData', function(){
    return Meteor.users.find({});
});