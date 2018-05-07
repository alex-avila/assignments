var counterBtn = document.getElementById('counter-btn');
var counterDisplay = document.getElementById('counter-display');
var countdown = document.getElementById('countdown');
countdown.textContent = 10;

if (!sessionStorage.count) {
    sessionStorage.count = 0;
}

var countdownInterval = setInterval(function() {
    countdown.textContent--;
    if (countdown.textContent == 0) {
        clearInterval(countdownInterval);
    }
}, 1000);

counterDisplay.textContent = sessionStorage.count;
counterBtn.addEventListener('click', function() {
    if (countdown.textContent != 0) {
        sessionStorage.count++;
        counterDisplay.textContent = sessionStorage.count;
    }
});