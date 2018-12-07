var buttonMenu = document.getElementById('buttonMenu');
buttonMenu.onclick = function(event) {
    var target = event.target;
    var setMenu = 5;
    var countdownHeader = document.getElementsByTagName('h1')[0];
    if (target.tagName != 'BUTTON') return;
    if (target.id === 'playButton') {
        document.getElementById('Popup').style.display = 'block';
        document.body.style.backgroundColor = '#535353';
        countdownHeader.innerHTML = 'first page(5)';
        timer = setInterval(function() {
            setMenu -= 1;
            countdownHeader.innerHTML = 'first page' + '(' + setMenu + ')';
        }, 1000);
        stopTimer = setTimeout(function() {
            clearInterval(timer);
            linkStore++;
            if (linkStore === 2) {
                document.location.href = './second%20page.html';
            } else if (linkStore === 3) {
                document.location.href = './third%20page.html';
            } else if (linkStore === 4) {
                document.location.href = './fourth%20page.html';
            } else if (linkStore > 4) {
                var repeat = confirm("Это последняя страница, хотите повторить?");
                if (repeat === true) {
                    document.location.href = './first%20page.html';
                } else if (repeat === false) {
                    document.getElementById('Popup').style.display = 'none';
                    document.body.style.backgroundColor = 'white';
                }
            }
        }, 5000);
    }
    if (target.id === 'stopButton') {
        setTimeout(function() {
            clearInterval(timer);
            clearInterval(stopTimer);
            document.getElementById('Popup').style.display = 'none';
            document.body.style.backgroundColor = 'white';
        }, 10);
    }
    if (target.id === 'prevButton') {
        if (linkStore === 1) {
            document.location.href = './fourth%20page.html';
        } else if (linkStore === 2) {
            document.location.href = './first%20page.html';
        } else if (linkStore === 3) {
            document.location.href = './second%20page.html';
        } else if (linkStore === 4) {
            document.location.href = './third%20page.html';
        }
    }
    if (target.id === 'nextButton') {
        if (linkStore === 1) {
            document.location.href = './second%20page.html';
        } else if (linkStore === 2) {
            document.location.href = './third%20page.html';
        } else if (linkStore === 3) {
            document.location.href = './fourth%20page.html';
        } else if (linkStore === 4) {
            document.location.href = './first%20page.html';
        }
    }
};