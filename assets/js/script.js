var divLimit = 17;
$(document).ready(function() {
    for (var i = 9; i <= divLimit; i++) {
        $(".container").append("<div class='row time-block'></div>");
        $(".time-block").each(function (i) {
            $(this).attr("id", "time" + i);
        });
    };
    
    

    $(".time-block").append("<div class='col-1 hour'></div>");
    $(".time-block").append("<textarea class='col-10 description'></textarea>");
    $(".time-block").append("<button class='col-1 saveBtn'></button>");
    $(".saveBtn").append("<i class='fas fa-save'></i>");

    var getCurrentTime = moment().hour();
    console.log(getCurrentTime);

});
