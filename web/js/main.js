

$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");;
});


$(function() {

    //Snipped Facebook
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '309194786265019',
            xfbml      : true,
            version    : 'v2.11'
        });
        FB.AppEvents.logPageView();
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // configure the bootstrap datepicker
    $('.js-datepicker').datepicker({
        format: 'yyyy-mm--dd'
    });


    /* OUVRIR MENU MOBILE */
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

    /* CLICK SUR LE MAIN POUR FERMER LE MENU MOBILE */
    $( "main" ).click(function() {

        if($(".openMenu").hasClass("active")) {
            $(".openMenu").removeClass("active");
            $(".openMenu" ).attr("aria-expanded","false");
            $("header nav" ).attr("aria-hidden","true");
            $("header nav").removeClass("active");
            $("header > img").removeClass("active");
        }



    });

        /* modale connect */
        var dialogElConnect = document.getElementById('my-accessible-dialog-connect');
        var mainEl = document.getElementById('main');
        var dialogConnect = new window.A11yDialog(dialogElConnect, mainEl);


        /* modale register */
        var dialogElRegister = document.getElementById('my-accessible-dialog-register');
        var dialogRegister = new window.A11yDialog(dialogElRegister, mainEl);


    /* click button modale */
    $('.btnModal').click(function(){
        var attrModal = $('main').attr('aria-hidden');
        if (attrModal == 'true'){
            $('html').css('overflow','hidden');
        }
        else{
            $('html').css('overflow','auto');
        }
    });

    /* click button close modale */

    $('.dialog-close').click(function(){
        var attrModal = $('main').attr('aria-hidden');
        if (attrModal == 'false'){
            $('html').css('overflow','hidden');
        }
        else{
            $('html').css('overflow','auto');
        }
    });
    /* click sur le fond derriere la modale */
    $('.dialog-overlay').click(function(){
        var attrModal = $('main').attr('aria-hidden');
        if (attrModal == 'false'){
            $('html').css('overflow','hidden');
        }
        else{
            $('html').css('overflow','auto');
        }
    });


    /* afficher aperçu image */
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#imageFileId').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    /* changer image file profil */
    $("#fos_user_profile_form_imageFile").change(function() {
        readURL(this);
    });

    /* changer image file register */
    $("#fos_user_registration_form_imageFile").change(function() {
        readURL(this);


    });

});

