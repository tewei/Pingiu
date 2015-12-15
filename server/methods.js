Meteor.methods({
    newMessage: function(message){
        message.timestamp = Date.now();
        message.user = Meteor.userId();
        return Messages.insert(message);
    },
    newRoom: function(room){
        room.timestamp = Date.now();
        room.active = false;
        return Chatrooms.insert(room);
    },
    joinRoom: function(userId, roomId){
        Chatrooms.update({_id: roomId},{
            $push: {members: userId},
            $set: {active: true}
        });
    }
});