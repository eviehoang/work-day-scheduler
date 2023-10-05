
// Variables
var day = $('#currentDay');
var saveBtn = document.getElementById("saveBtn");
var currentTime = dayjs().hour();

// Display time.
setInterval(function showDate() {
  var today = dayjs()
  day.text(today);
})

showDate();

// Track hr of day.

$(function timeTracker() {

  $('.timetrack').each(function () {
    var schdTime = $(this).attr("id").split("time")[1];

    if (schdTime < currentTime) {
      $(this).addClass("past");
    }

    else if (schdTime == currentTime) {
      $(this).addClass("present");
    }

    else {
      $(this).addClass("future");
    }
  })

});

// Event Listner
$('saveBtn').on('click', function(){

  // Grab inputed task.
  var task = $(this).siblings("").val();
})
