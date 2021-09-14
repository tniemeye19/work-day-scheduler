$(document).ready(function() {
    var divLimit = 17;
    for (var i = 9; i <= divLimit; i++) {
        $(".container").append("<div class='row time-block' id='time" + i + "'></div>");

    };
    
    $(".time-block").append("<div class='col-1 hour'></div>");
    for (var i = 9; i <= divLimit; i++) {

        var morning = i + "AM";
        var afternoon = i + "PM";

        $(".hour").text(morning);
    }
    $(".time-block").append("<textarea class='col-10 description'></textarea>");
    $(".time-block").append("<button class='col-1 saveBtn'></button>");
    $(".saveBtn").append("<i class='fas fa-save'></i>");

    
    var getCurrentTime = moment().hour();
    function singleTimeBlock() {
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("time")[1]);
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

    $(".saveBtn").on("click", function() {

        var userTextInput = $(this).siblings(".description").val();

        var timeInput = $(this).parent().attr("id");

        localStorage.setItem(timeInput, userTextInput);
    })

    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time13 .description").val(localStorage.getItem("time13"));
    $("#time14 .description").val(localStorage.getItem("time14"));
    $("#time15 .description").val(localStorage.getItem("time15"));
    $("#time16 .description").val(localStorage.getItem("time16"));
    $("#time17 .description").val(localStorage.getItem("time17"));


    singleTimeBlock();

});
