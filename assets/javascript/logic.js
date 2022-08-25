var timeContainer = $('#row-container');
var currentDay = $('#currentDay');
var todayDate = moment().format('MMM Do YYYY');
var currentTime= moment().format('H')
console.log(currentTime)
console.log(timeContainer);
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

timeCards.forEach(function(timeCards){
    var timeConvert = moment(timeCards.time, 'hA').format('H');
    var rowEl = $('<tr>').addClass('row time-block col-12');
    var timeHead = $('<th>').addClass('hour col').attr('data-mt', 'd'.replace(/d/g, timeConvert)).text(timeCards.time);
    var taskEl = $('<td>').addClass('col-10').text(timeCards.tasks);
    var saveEl = $('<td>').addClass('col btn saveBtn').text(timeCards.save);
    var saveIcon = $('<i>').addClass('fas fa-save fa-lg');
    

    if (timeHead.data('mt') == currentTime) {
        taskEl.addClass(' present')
    } else if (timeHead.data('mt') < currentTime) {
        taskEl.addClass(' past')
    } else {
        taskEl.addClass(' future')
    }

    saveEl.append(saveIcon);
    rowEl.append(timeHead, taskEl, saveEl);
    timeContainer.append(rowEl);
    console.log(timeConvert)
})

currentDay.text(todayDate)