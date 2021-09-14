var divLimit = 17;
$(document).ready(function() {
    for (var i = 9; i <= divLimit; i++) {
        $(".container").append("<div class='row time-block' id='time" + i + "'></div>");

    };
    
    $(".time-block").append("<div class='col-1 hour'></div>");

            // var morning = i + "AM";
            // var afternoon = i + "PM";
            // if (i <= 11) {
            //     console.log("morning");
            //     $(".hour").html(morning);
            // } else {
            //     console.log("afternoon");
            //     $(".hour").html(afternoon);
            // }



    $(".time-block").append("<textarea class='col-10 description'></textarea>");
    $(".time-block").append("<button class='col-1 saveBtn'></button>");
    $(".saveBtn").append("<i class='fas fa-save'></i>");

    var getCurrentTime = moment().hour();
    console.log(getCurrentTime);

    function singleTimeBlock() {
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split()[1]);
            console.log(blockTime);
            if (blockTime === getCurrentTime) {
                $(this).children(".description").addClass("present");
                $(this).children(".description").removeClass("past");
                $(this).children(".description").removeClass("future");
            } else if (blockTime < getCurrentTime) {
                $(this).children(".description").addClass("past");
                $(this).children(".description").removeClass("present");
                $(this).children(".description").removeClass("future");
            } else {
                $(this).children(".description").addClass("future");
                $(this).children(".description").removeClass("past");
                $(this).children(".description").removeClass("present");
            };
        });
    };
    singleTimeBlock();

});
