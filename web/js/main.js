




$(function() {
    $( ".openMenu" ).click(function() {

        if($(".openMenu").hasClass("active")){
            $(".openMenu" ).removeClass("active");
            $("header nav").removeClass("active");

        }
        else{
            $(".openMenu" ).addClass("active");
            $("header nav").addClass("active");
        }
    });
});