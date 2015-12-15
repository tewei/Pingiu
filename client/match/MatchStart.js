Template.MatchStart.events({
    'submit .match-start': function(event){
        event.preventDefault();
        var keyword = event.target.keyword.value;
        if(keyword === "") keyword = "NONE";
        var room = Chatrooms.findOne({keyword: keyword, active: false});
        if(room){
            Meteor.call('joinRoom', Meteor.userId(), room._id)
            FlowRouter.go('/chats/'+room._id);
        }else{
            var roomId = Chatrooms.insert({
                members: [
                    Meteor.userId()
                ],
                active: false,
                keyword: keyword,
                timestamp: new Date()
            });
            FlowRouter.go('/chats/'+roomId)
        }
    }
});