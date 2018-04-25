var countdown = document.getElementById('countdown');
var time = 5436;

function convertToHMS(time) {
    var hours = '00',
        minutes = '00',
        seconds = '00',
        output = '';
    hours = Math.floor(time / 3600);
    minutes = Math.floor(((time / 3600) - hours) * 60);
    seconds = Math.floor(((((time / 3600) - hours) * 60) - minutes) * 60);
    var arr = [hours, minutes, seconds];
    for (var i = 0; i < 3; i++) {
        if (arr[i] < 10) {
            output += '0' + arr[i];
        } else {
            output += arr[i];
        }
        if (i < 2) {
            output += ':';
        }
    }
    
//    if (hours < 10) {
//        output += '0' + hours + ':';
//    } else {
//        output += hours + ':';
//    }
//    if (minutes < 10) {
//        output += '0' + minutes + ':';
//    } else {
//        output += minutes + ':';
//    }
//    if (seconds < 10) {
//        output += '0' + seconds;
//    } else {
//        output += seconds;
//    }
    return output;
}

var countdownInterval = setInterval(function() {
    if (time < 0) {
        countdown.style.fontSize = '80px';
        countdown.textContent = 'The end of the world has come upon us.';
        document.getElementById('explosion').play();
        clearInterval(countdownInterval);
    } else {
        countdown.textContent = convertToHMS(time); // not working yet
        time--;
    }
}, 1000);