var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1480303346;
var currentMoment = moment.unix(timestamp);

console.log('current moment: ', currentMoment.format('MMM D, YY @ h:mm a'));

// 3rd January 2016 @ 13:32
var format = 'Do MMMM YYYY @ k:mm';
console.log('current moment: ', currentMoment.format(format));
