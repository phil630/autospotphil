function engine(){
    var c= Number(document.getElementById("year").value);
    if(c>10){
        document.getElementById("result2").innerHTML="GET A NEW CAR!";
    }
    else{
        document.getElementById("result2").innerHTML="Bring in your car";
    }
}



// $(document).ready(function(){
//     $("button").click(function(){
//         $("#Whatswrong").animate({
//             left:"250px",
//             width:"200px",
//             opacity:"0.5",
//             fontSize:"36px"
//         });
//     });
// });


// $(document).ready(function(){
//     $("#phase2").width(200);
//     $("#phase2").mouseover(function(){
//         $(this).css("cursor","pointer");
//         $(this).animate({width:"500px"},"slow");
//     });
//     $("#phase2").mouseout(function(){
//         $(this).animate({width:"200px"},"slow");
//     });
//     });


$("#phase2").mouseenter(function(){
    $("#phase2").width(200);
});
$("#phase2").mouseleave(function(){
    $("#phase2").width(100)
});





















