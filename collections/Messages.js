Messages = new Mongo.Collection('messages');

Messages.allow({
    insert: function (userId, doc) {
        return (userId && userId === doc.author);;
    }
});