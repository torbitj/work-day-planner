var timeContainer = $('#row-container');
var currentDay = $('#currentDay');
var todayDate = moment().format('MMM Do YYYY');
console.log(timeContainer);
// time objects with content
var timeCards = [
    {
        time: '9AM',
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

    var rowEl = $('<tr>').addClass('row time-block col-12');
    var timeHead = $('<th>').addClass('hour col').text(timeCards.time);
    var taskEl = $('<td>').addClass('col-10').text(timeCards.tasks);
    var saveEl = $('<td>').addClass('col btn saveBtn').text(timeCards.save);
    var saveIcon = $('<i>').addClass('fas fa-save fa-lg');

    saveEl.append(saveIcon);
    rowEl.append(timeHead, taskEl, saveEl);
    timeContainer.append(rowEl);
    
})

currentDay.text(todayDate)