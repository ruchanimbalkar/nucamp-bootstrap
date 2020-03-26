$(function(){
    $(".carousel").carousel({interval:2000});//2000 milliseconds which is 2 seconds
    //The default is 5000 milliseconds
    $("#carouselButton").click(function(){
           if( $("#carouselButton").children("i").hasClass("fa-pause")){
               $(".carousel").carousel("pause");
               $("#carouselButton").children("i").removeClass("fa-pause");
               $("#carouselButton").children("i").addClass("fa-play");

           }
           else{
                $(".carousel").carousel("cycle");
               $("#carouselButton").children("i").removeClass("fa-play");
               $("#carouselButton").children("i").addClass("fa-pause");    
            
           }
    });
    $("#carouselPlay").click(function(){
        $(".carousel").carousel("cycle");
    });
});
