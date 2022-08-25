var timeContainer = $('#row-container')
console.log(timeContainer)
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
    var taskEl = $('<td>').addClass('col-9').text(timeCards.task);
    var saveEl = $('<td>').addClass('col').text(timeCards.save);

    rowEl.append(timeHead, taskEl, saveEl)
    timeContainer.append(rowEl)
    
})