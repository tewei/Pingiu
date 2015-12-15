Chatrooms = new Mongo.Collection('chatrooms');

Chatrooms.allow({
    insert: function (userId, doc) {
        
        return userId;
    },
    update: function (userId, doc, fieldNames, modifier) {
        
        return userId;
    }
});
