var timeContainer = $('#row-container');
var saveButtonEl = $('.saveBtn');
var currentDay = $('#currentDay');
var todayDate = moment().format('MMM Do YYYY');
var currentTime= moment().format('H');
// Add Current Date to Jumbotron
currentDay.text(todayDate)
// time objects with content
var timeCards = [
    {
        time: "9AM",
        tasks: '',
        save: ''
    },
    {
        time: '10AM',
        tasks: '',
        save: ''
    },
    {
        time: '11AM',
        tasks: '',
        save: ''
    },
    {
        time: '12PM',
        tasks: '',
        save: ''
    },
    {
        time: '1PM',
        tasks: '',
        save: ''
    },
    {
        time: '2PM',
        tasks: '',
        save: ''
    },
    {
        time: '3PM',
        tasks: '',
        save: ''
    },
    {
        time: '4PM',
        tasks: '',
        save: ''
    },
    {
        time: '5PM',
        tasks: '',
        save: ''
    }
]
// Create new row for every time card, including class and styles
timeCards.forEach(function(timeCards){
    var timeConvert = moment(timeCards.time, 'hA').format('H');
    var rowEl = $('<tr>').addClass('row time-block col-12').attr('data-index', 'd'.replace(/d/g, timeConvert));
    var timeHead = $('<th>').addClass('hour col').attr('data-mt', 'd'.replace(/d/g, timeConvert)).text(timeCards.time);
    var taskEl = $('<td>').addClass('col-10').text(timeCards.tasks);
    var textTaskEl = $('<textarea>').addClass('form-control bg-transparent border-0').attr('data-text', 'd'.replace(/d/g, timeConvert));
    var saveEl = $('<td>').addClass('col btn saveBtn d-flex align-items-center justify-content-center').text(timeCards.save);
    var saveIcon = $('<i>').addClass('fas fa-save fa-sm');
    
    // Timecard backgroung to correlate to time of day
    if (timeHead.data('mt') == currentTime) {
        taskEl.addClass(' present');
    } else if (timeHead.data('mt') < currentTime) {
        taskEl.addClass(' past');
    } else {
        taskEl.addClass(' future');
    }

    saveEl.append(saveIcon);
    rowEl.append(timeHead, taskEl, saveEl);
    taskEl.append(textTaskEl);
    timeContainer.append(rowEl);
})

// Function to save text to local storage by pressing button field or icon

function saveText(event) {
    
    if(event.target.matches('.btn') === true) {
        var index = event.target.parentElement.getAttribute('data-index');
        var textAreaInput =  event.target.parentElement.children[1].children[0].value;
        localStorage.setItem(index, textAreaInput);
        
    } 

    if(event.target.matches('.fas') === true) {
        var index = event.target.parentElement.parentElement.getAttribute('data-index');
        var textAreaInput =  event.target.parentElement.parentElement.children[1].children[0].value;
        localStorage.setItem(index, textAreaInput);
    }
}

// Render text to right time row if text is saved in local storage
function renderText() {
    for (var i = 9; i < 17; i++) {
        var localKey = localStorage.getItem(i);
        var index = $(`tr[data-index=${i}]`);
        var textAreaText = index.find('textarea')
        if (localKey !== null) {
                $(textAreaText).text(localKey)
        }
    }
}

// Run save function on click
timeContainer.on('click', saveText);
// Run render text funcion on page load
renderText();


