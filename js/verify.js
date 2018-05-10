$(document).ready(function () {
    // $(".userinfo").bind('intput propertychange',function(){
    //     alert('12');
    // });
    // $(".userinfo").bind('keydown',function(event){
    //     var v=$(this).val();
    //     if($.trim(v)==''){

    //     }else{

    //     }
    // });
    //设置登录状态
    var loginStatus = 1;
    $(".login").bind("click", function () {
        var account = $("[class='userinfo account']").val();
        loginStatus = 1;
        // var account=$("input .account").val();
        if ($.trim(account) == '' && loginStatus == 1) {
            /*$(".userinfo_ele .account").css("border-color","#c9302c");*/
            $("[class='userinfo_ele account']").css("border-color", "#c9302c");
            loginStatus = -1;
        } else {
            $("[class='userinfo_ele account']").css("border-color", "#d5dce5");
        }
        var psw = $("[class='userinfo password']").val();
        if ($.trim(psw) == "" && loginStatus == 1) {
            $("[class='userinfo_ele password']").css("border-color", "#c9302c");
            loginStatus = -2;
        } else {
            $("[class='userinfo_ele password']").css("border-color", "#d5dce5");
        }
        switch (loginStatus) {
            case -1:
                $(".error-login").css("display", "block");
                $(".error-message").text("请输入账号!");
                break;
            case -2:
                $(".error-login").css("display", "block");
                $(".error-message").text("请输入密码!");
                break;
            default:
                $(".error-login").css("display", "none");
                break;
        }
    });
});