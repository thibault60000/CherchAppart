

$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");;
});


$(function() {

    /* ****************************************
    ************* EDIT ACCOUNT BTN ************
    *******************************************/

    if($('.editUsername .editIdBtn')){
        $( ".editUsername .editIdBtn" ).click(function() {
            if( $( ".editUsername .editIdBtn" ).hasClass('active')){
                $( ".editUsername .editIdBtn" ).removeClass('active');
                $('#fos_user_profile_form_username').attr('disabled','disabled');
                $( ".editUsername .editIdBtn i" ).removeClass('fa-close');
                $( ".editUsername .editIdBtn i" ).addClass('fa-pencil-square');
            }
            else{
                $( ".editUsername .editIdBtn" ).addClass('active');
                $('#fos_user_profile_form_username').removeAttr('disabled');
                $( ".editUsername .editIdBtn i" ).removeClass('fa-pencil-square');
                $( ".editUsername .editIdBtn i" ).addClass('fa-close');
            }

        });
    }
    if($('.editEmail .editIdBtn')){
        $( ".editEmail .editIdBtn" ).click(function() {
            if( $( ".editEmail .editIdBtn" ).hasClass('active')){
                $( ".editEmail .editIdBtn" ).removeClass('active');
                $('#fos_user_profile_form_email').attr('disabled','disabled');
                $( ".editEmail .editIdBtn i" ).removeClass('fa-close');
                $( ".editEmail .editIdBtn i" ).addClass('fa-pencil-square');
            }
            else{
                $( ".editEmail .editIdBtn" ).addClass('active');
                $('#fos_user_profile_form_email').removeAttr('disabled');
                $( ".editEmail .editIdBtn i" ).removeClass('fa-pencil-square');
                $( ".editEmail .editIdBtn i" ).addClass('fa-close');
            }
        });
    }

    if($('.editAdress .editIdBtn')){
        $( ".editAdress .editIdBtn" ).click(function() {
            if( $( ".editAdress .editIdBtn" ).hasClass('active')){
                $( ".editAdress .editIdBtn" ).removeClass('active');
                $('#fos_user_profile_form_adress').attr('disabled','disabled');
                $( ".editAdress .editIdBtn i" ).removeClass('fa-close');
                $( ".editAdress .editIdBtn i" ).addClass('fa-pencil-square');
            }
            else{
                $( ".editAdress .editIdBtn" ).addClass('active');
                $('#fos_user_profile_form_adress').removeAttr('disabled');
                $( ".editAdress .editIdBtn i" ).removeClass('fa-pencil-square');
                $( ".editAdress .editIdBtn i" ).addClass('fa-close');
            }
        });
    }

    if($('.editPhone .editIdBtn')){
        $( ".editPhone .editIdBtn" ).click(function() {
            if( $( ".editPhone .editIdBtn" ).hasClass('active')){
                $( ".editPhone .editIdBtn" ).removeClass('active');
                $('#fos_user_profile_form_phone_number').attr('disabled','disabled');
                $( ".editPhone .editIdBtn i" ).removeClass('fa-close');
                $( ".editPhone .editIdBtn i" ).addClass('fa-pencil-square');
            }
            else{
                $( ".editPhone .editIdBtn" ).addClass('active');
                $('#fos_user_profile_form_phone_number').removeAttr('disabled');
                $( ".editPhone .editIdBtn i" ).removeClass('fa-pencil-square');
                $( ".editPhone .editIdBtn i" ).addClass('fa-close');
            }
        });
    }
    if($('.editPostal .editIdBtn')){
        $( ".editPostal .editIdBtn" ).click(function() {
            if( $( ".editPostal .editIdBtn" ).hasClass('active')){
                $( ".editPostal .editIdBtn" ).removeClass('active');
                $('#fos_user_profile_form_postal_code').attr('disabled','disabled');
                $( ".editPostal .editIdBtn i" ).removeClass('fa-close');
                $( ".editPostal .editIdBtn i" ).addClass('fa-pencil-square');
            }
            else{
                $( ".editPostal .editIdBtn" ).addClass('active');
                $('#fos_user_profile_form_postal_code').removeAttr('disabled');
                $( ".editPostal .editIdBtn i" ).removeClass('fa-pencil-square');
                $( ".editPostal .editIdBtn i" ).addClass('fa-close');
            }
        });
    }
    if($('.editCity .editIdBtn')){
        $( ".editCity .editIdBtn" ).click(function() {
            if( $( ".editCity .editIdBtn" ).hasClass('active')){
                $( ".editCity .editIdBtn" ).removeClass('active');
                $('#fos_user_profile_form_city').attr('disabled','disabled');
                $( ".editCity .editIdBtn i" ).removeClass('fa-close');
                $( ".editCity .editIdBtn i" ).addClass('fa-pencil-square');
            }
            else{
                $( ".editCity .editIdBtn" ).addClass('active');
                $('#fos_user_profile_form_city').removeAttr('disabled');
                $( ".editCity .editIdBtn i" ).removeClass('fa-pencil-square');
                $( ".editCity .editIdBtn i" ).addClass('fa-close');
            }
        });
    }

    /* ****************************************
    ************* SNIPEED FACEBOOK ************
    *******************************************/

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
    if($( ".openMenu" )){
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
    }


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

    /* MODAL */
    if($('#my-accessible-dialog-connect')){
        /* modale connect */
        var dialogElConnect = document.getElementById('my-accessible-dialog-connect');
        var mainEl = document.getElementById('main');
        var dialogConnect = new window.A11yDialog(dialogElConnect, mainEl);
        /* modale register */
        var dialogElRegister = document.getElementById('my-accessible-dialog-register');
        var dialogRegister = new window.A11yDialog(dialogElRegister, mainEl);
    }


    /* click button modale */
    if($('.btnModal')){
        $('.btnModal').click(function(){
            var attrModal = $('main').attr('aria-hidden');
            if (attrModal == 'true'){
                $('html').css('overflow','hidden');
            }
            else{
                $('html').css('overflow','auto');
            }
        });
    }


    /* click button close modale */
    if($('.dialog-overlay')){
        $('.dialog-overlay').click(function(){
            var attrModal = $('main').attr('aria-hidden');
            if (attrModal == 'false'){
                $('html').css('overflow','hidden');
            }
            else{
                $('html').css('overflow','auto');
            }
        });
    }

    /* click sur le fond derriere la modale */
    if($('.dialog-overlay')){
        $('.dialog-overlay').click(function(){
            var attrModal = $('main').attr('aria-hidden');
            if (attrModal == 'false'){
                $('html').css('overflow','hidden');
            }
            else{
                $('html').css('overflow','auto');
            }
        });
    }

    /* afficher aperçu image */
    function readURL(input) {
        if (input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imageFileId').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    /* changer image file profil */
    if($("#fos_user_profile_form_imageFile")){
        $("#fos_user_profile_form_imageFile").change(function() {
            readURL(this);
        });
    }

    /* changer image file register */
    if( $("#fos_user_registration_form_imageFile")){
        $("#fos_user_registration_form_imageFile").change(function() {
            readURL(this);
        });
    }

});

