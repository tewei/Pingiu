Requests = new Mongo.Collection('requests');

Requests.allow({
    insert: function (userId, doc) {
        return (userId && userId === doc.author);;
    }
});