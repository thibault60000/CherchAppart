

/* Burger button */

$(".btn-burger").click(function(){
    if($(this).hasClass("open")){
        $(this).removeClass("open");
        $("nav ul").removeClass("open");
    }
    else{
        $(this).addClass("open");
        $("nav ul").addClass("open");
    }
})


/* Connection button */

$(".btn-connect").click(function(){;
    $("nav ul").removeClass("open");

})
