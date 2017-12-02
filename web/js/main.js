

$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");;
});


$(function() {

    // configure the bootstrap datepicker
    $('.js-datepicker').datepicker({
        format: 'yyyy-mm--dd'
    });

    
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


    $('.btnModal').click(function(){
        var attrModal = $('main').attr('aria-hidden');
        if (attrModal == 'true'){
            $('html').css('overflow','hidden');
        }
        else{
            $('html').css('overflow','auto');
        }
    });


    $('.dialog-overlay').click(function(){
        var attrModal = $('main').attr('aria-hidden');
        if (attrModal == 'true'){
            $('html').css('overflow','hidden');
        }
        else{
            $('html').css('overflow','auto');
        }
    });


    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#fos_user_profile_form_imageFile").change(function() {
        readURL(this);
    });

    $("#fos_user_registration_form_imageFile").change(function() {
        readURL(this);


    });

});

