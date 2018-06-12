

var win = 0;
var lose = 0;
var count=0;
var randomchoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$(".r1").html(randomchoice);
$(".w1").html(win);
$(".l1").html(lose);
$("#a1").html(count);


    for(var i=1; i<5 ;i++){
     var random=Math.floor(Math.random() * (12 - 1 + 1)) + 1; 
     $("#image"+[i]).attr("value",random);
    }



    $(".image").on("click" ,function () {
    var crystal = ($(this).attr("value"));
    crystal = parseInt(crystal);
    count += crystal;
    $("#a1").html(count);
    
   if(count === randomchoice)
   {
       alert("win");
       win++;
       $(".w1").html(win);
       count=0;
       $("#a1").html(count);
       randomchoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
       $(".r1").html(randomchoice);
       for(var i=1; i<5 ;i++){
        var random=Math.floor(Math.random() * (12 - 1 + 1)) + 1; 
        $("#image"+[i]).attr("value",random);
    
    }
       }
    else if (count >= randomchoice)
    {
        alert("lose");
        lose++;
        $(".l1").html(lose);
        count=0;
        $("#a1").html(count);
        randomchoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $(".r1").html(randomchoice);
        for(var i=1; i<5 ;i++){
            var random=Math.floor(Math.random() * (12 - 1 + 1)) + 1; 
            $("#image"+[i]).attr("value",random);
        }

    


    }
       
});