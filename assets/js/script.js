
// Variables
var day = $('#currentDay');
var saveBtn = document.getElementById("saveBtn");
var currentTime = dayjs().hour();

var clearBtn = document.getElementById("clearBtn")

// Display time.
setInterval(function showDate() {
  var today = dayjs()
  day.text(today);
})

// Track hr of day.

function timeTracker() {

  $('.description').each(function () {
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

};

// Event Listner
$('.saveBtn').on('click', function () {

  // Grab inputed task.
  var task = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");

  localStorage.setItem(hour, task);

  // Add information into Modal
  var modal = document.getElementById('modalprint');
  modal.textContent = "You've added: " + task + " !";
})

$("#time08 .description").val(localStorage.getItem("time08"));
$("#time09 .description").val(localStorage.getItem("time09"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));


// Clear List
clearBtn.onclick = function () {
  localStorage.clear();
  // refresh page to show clearing
  history.go();
};

timeTracker();
