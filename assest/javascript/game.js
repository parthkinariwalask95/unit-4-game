
// creating 3 varriables win,lose,count
// win starting from 0.
var win = 0;
// lose starting from 0.
var lose = 0;
// count starting from 0.
var count = 0;
// Generate a number between 19 to 120.
var randomchoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$(".r1").html(randomchoice);
$(".w1").html(win);
$(".l1").html(lose);
$("#a1").html(count);

// for loop
for (var i = 1; i < 5; i++) {
    var random = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#image" + [i]).attr("value", random);
}


// on click function
$(".image").on("click", function () {
    var crystal = ($(this).attr("value"));
    // parseint 
    crystal = parseInt(crystal);
    count += crystal;
    $("#a1").html(count);
// if statment
    if (count === randomchoice) {
        // alert box
        alert("win");
        win++;
        $(".w1").html(win);
        count = 0;
        $("#a1").html(count);
        randomchoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $(".r1").html(randomchoice);
        // for loop
        for (var i = 1; i < 5; i++) {
            var random = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            $("#image" + [i]).attr("value", random);

        }
    }
    // else if statment
    else if (count >= randomchoice) {
        // alert box
        alert("lose");
        lose++;
        $(".l1").html(lose);
        count = 0;
        $("#a1").html(count);
        randomchoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $(".r1").html(randomchoice);
        // for loop
        for (var i = 1; i < 5; i++) {
            var random = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            $("#image" + [i]).attr("value", random);
        }




    }

});