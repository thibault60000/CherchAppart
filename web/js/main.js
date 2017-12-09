

$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");;
});


$(function() {

    /* ************************************************
    *****************  LOGIN SYSTEM *******************
    * *************************************************/

    // ENTER to First INPUT
    $('.first > input').keydown(function(event){
        if (event.which === 13 || event.keyCode === 13) {
            $('.first > input').blur();
            $('.goPassword').click()
            $('.returnUsername').addClass("appear");
        }
    });

    // ENTER to Password INPUT
    $('.second > input').keydown(function(event){
        if (event.which === 13 || event.keyCode === 13) {
            $('.submitLoginSys').click()
        }
    });

    // CLICK on GoPassword
    $('.goPassword').click(function(event){
            event.preventDefault();
            $('.first').addClass("left");
            $('.returnUsername').addClass("appear");
            $('.second').addClass("left");
            $('.second > #password').focus();

    });

    // CLICK back Button
    $('.returnUsername').click(function(event){
        event.preventDefault();
        $('.first').removeClass("left");
        $('.second').removeClass("left");
        $('.returnUsername').removeClass("appear");
        $('.first > input').focus()
    });



    /* ****************************************
    ************* SCROLLING ARROW *************
    * ***************************************** */

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.topEditAccount').addClass('visible');
        }
        else {
            $('.topEditAccount').removeClass('visible');
        }
    });

    if ($('.topEditAccount')) {
        $('.topEditAccount').click(function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
        });

    }
    /* ***************************************************
       ************* ANNOUNCES (EDIT ACCOUNT) ************
       ***************************************************/
    if(document.querySelector( '#editAccountannounces' )) {
        $('#editAccountannounces').ariaAccordion({
            expandOnlyOne: true
        });
    }

    /* ********************************************
      ************* TABS MY COMMENTS  *************
      *******************************************/

    if(document.querySelector( '.tabsComments[role="tablist"]' )) {
        var comTablist = document.querySelector( '.tabsComments[role="tablist"]');
        var commentsTablist = new window.Tablist( comTablist );
    }


    /* ********************************************
       ************* TABS EDIT ACCOUNT ************
       *******************************************/

    if(document.querySelector( '.tabsAccount[role="tablist"]' )) {
        var acTablist = document.querySelector( '.tabsAccount[role="tablist"]');
        var editAccountTablist = new window.Tablist( acTablist );
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

