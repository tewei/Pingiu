Template.UserSignup.events({
    'submit .user-signup': function(event){
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        var repassword = event.target.repassword.value;
        var isValidPassword = function(pwd, pwd2){
            if(pwd === pwd2){
                return pwd.length >= 6 ? true : false;
            } else {
                return swal({
                    title: "密碼不相符",
                    text: "請重試",
                    timer: 1700,
                    showConfirmButton: true,
                    type: "error"
                });
            }
        }
        if(isValidPassword(password, repassword)){
            Accounts.createUser({
                email: email,
                password: password
            }, function(error){
                if(error){
                    console.log("Sign Up Error: " + error.reason);
                }else{
                    swal({
                        title: "註冊成功",
                        text: "登入吧",
                        timer: 1700,
                        showConfirmButton: true,
                        type: "success"
                    });
                    FlowRouter.go('/login');
                }
            });
        }
        return false;
    }
});