FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('SiteLayout', {feature: 'Start'});
    }
});


FlowRouter.route('/match', {
    name: 'match',
    action() {
        BlazeLayout.render('SiteLayout', {feature: 'MatchStart'});
    }
});


FlowRouter.route('/chats', {
    name: 'chats',
    action() {
        BlazeLayout.render('SiteLayout', {feature: 'ChatsList'});
    }
});

FlowRouter.route('/chats/:roomId', {
    name: 'chatroom',
    action() {
        BlazeLayout.render('SiteLayout', {feature: 'Chatroom'});
    }
});

FlowRouter.route('/friends', {
    name: 'friends',
    action() {
        BlazeLayout.render('SiteLayout', {feature: 'FriendsList'});
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('SiteLayout', {feature: 'UserLogin'});
    }
});


FlowRouter.route('/signup', {
    name: 'signup',
    action() {

        if(Meteor.userId()){
            FlowRouter.go('/chats');
        } else {
            BlazeLayout.render('SiteLayout', {feature: 'UserSignup'});
        }
        
    }
});






