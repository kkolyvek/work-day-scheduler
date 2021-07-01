// INITIALIZE CURRENT DAY AND ROW BACKGROUNDS
var currentHour = moment().format("HH");

$('#currentDay').text(moment().format("dddd, MMMM Do"));
for (var i=9; i<17; i++) {
    var currentRow = parseInt($('#schedule').children().eq(0).children().first().attr('data-hour'));
    if (currentHour > currentRow) {
        $('#schedule').children().eq(i-9).addClass('table-success')
    } else if (currentHour < currentRow) {
        $('#schedule').children().eq(i-9).addClass('table-warning')
    } else {
        $('#schedule').children().eq(i-9).addClass('table-info')
    };
};

if (!localStorage.getItem("eventItemsStorage")) {
    var eventItemsArray = ['','','','','','','',''];
} else {
    var eventItemsArray = JSON.parse(localStorage.getItem("eventItemsStorage"))
};

for (var i=0; i<8; i++) {
    $('#schedule').children().eq(i).children().eq(1).children().first().val(eventItemsArray[i]);
}


// UPDATE HEADER WITH CURRENT DAY
$('#currentDay').text(moment().format("dddd, MMMM Do"));
var dateUpdate = setInterval(function() {
    $('#currentDay').text(moment().format("dddd, MMMM Do"));
}, 1000);

// UPDATE ROW BACKGROUND DEPENDING ON PAST/PRESENT/FUTURE
// Past: Bootstrap class "table-success"
// Present: Bootstrap class "table-info"
// Future: Bootstrap class "table-warning"
var colorUpdate = setInterval( function() {
    // check every second bc why not
    
    for (var i=9; i<17; i++) {
        var currentRow = parseInt($('#schedule').children().eq(0).children().first().attr('data-hour'));
        if (currentHour > currentRow) {
            $('#schedule').children().eq(i-9).addClass('table-success')
        } else if (currentHour < currentRow) {
            $('#schedule').children().eq(i-9).addClass('table-warning')
        } else {
            $('#schedule').children().eq(i-9).addClass('table-info')
        };
    };    
}, 1000);

// ADD EVENT LISTENERS FOR SAVE TO LOCAL STORAGE BUTTONS
$('#btn-9').on('click', function () {
    eventItemsArray[0] = $('#text1').val();
    localStorage.setItem('eventItemsStorage', JSON.stringify(eventItemsArray));
});
$('#btn-10').on('click', function () {
    eventItemsArray[1] = $('#text2').val();
    localStorage.setItem('eventItemsStorage', JSON.stringify(eventItemsArray));
});
$('#btn-11').on('click', function () {
    eventItemsArray[2] = $('#text3').val();
    localStorage.setItem('eventItemsStorage', JSON.stringify(eventItemsArray));
});
$('#btn-12').on('click', function () {
    eventItemsArray[3] = $('#text4').val();
    localStorage.setItem('eventItemsStorage', JSON.stringify(eventItemsArray));
});
$('#btn-13').on('click', function () {
    eventItemsArray[4] = $('#text5').val();
    localStorage.setItem('eventItemsStorage', JSON.stringify(eventItemsArray));
});
$('#btn-14').on('click', function () {
    eventItemsArray[5] = $('#text6').val();
    localStorage.setItem('eventItemsStorage', JSON.stringify(eventItemsArray));
});
$('#btn-15').on('click', function () {
    eventItemsArray[6] = $('#text7').val();
    localStorage.setItem('eventItemsStorage', JSON.stringify(eventItemsArray));
});
$('#btn-16').on('click', function () {
    eventItemsArray[7] = $('#text8').val();
    localStorage.setItem('eventItemsStorage', JSON.stringify(eventItemsArray));
});