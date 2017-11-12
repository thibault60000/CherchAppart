




$(function() {
    $( ".openMenu" ).click(function() {

        if($(".openMenu").hasClass("active")){
            $(".openMenu" ).removeClass("active");
            $(".openMenu" ).attr("aria-expanded","false");
            $("header nav" ).attr("aria-hidden","true");
            $("header nav").removeClass("active");
            $("header > img").removeClass("active");

        }
        else{
            $(".openMenu" ).addClass("active")
            $(".openMenu" ).attr("aria-expanded","true");
            $("header nav" ).attr("aria-hidden","false");
            $("header nav").addClass("active");
            $("header > img").addClass("active");
        }
    });

    $( "main" ).click(function() {

        if($(".openMenu").hasClass("active")) {
            $(".openMenu").removeClass("active");
            $(".openMenu" ).attr("aria-expanded","false");
            $("header nav" ).attr("aria-hidden","true");
            $("header nav").removeClass("active");
            $("header > img").removeClass("active");
        }
    });

        var dialogElConnect = document.getElementById('my-accessible-dialog-connect');
        var mainEl = document.getElementById('main');
        var dialogConnect = new window.A11yDialog(dialogElConnect, mainEl);

        var dialogElRegister = document.getElementById('my-accessible-dialog-register');
        var dialogRegister = new window.A11yDialog(dialogElRegister, mainEl);

});