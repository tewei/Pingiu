Template.UserLogin.events({
    'submit .user-login': function(event){
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                return swal({
                    title: "登入失敗",
                    text: "請重試",
                    timer: 1700,
                    showConfirmButton: false,
                    type: "error"
                });
            }else{
                swal({
                    title: "登入成功",
                    text: "尋找你的知音",
                    timer: 1700,
                    showConfirmButton: true,
                    type: "success"
                });
                FlowRouter.go('/chats');
            }
        });
        return false
        event.target.text.value = "";
    }
});

Template.SiteHeader.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});