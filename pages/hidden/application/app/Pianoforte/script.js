const keyElements = document.querySelectorAll('.key');
console.log(keyElements);

const notes = {
    do: '01-do.mp3',
    dodiesis: '02-dodiesis.mp3',
    re: '03-re.mp3',
    rediesis: '04-rediesis.mp3',
    mi: '05-mi.mp3',
    fa: '06-fa.mp3',
    fadiesis: '07-fadiesis.mp3',
    sol: '08-sol.mp3',
    soldiesis: '09-soldiesis.mp3',
    la: '10-la.mp3',
    ladiesis: '11-ladiesis.mp3',
    si: '12-si.mp3'
}

function playSound(key) {
    const audioElement = new Audio();
    const note = notes[key];
    audioElement.src = 'sounds/' + note;
    audioElement.play();
}


keyElements.forEach(function(keyElement) {
    keyElement.addEventListener('click', function() {
        const key = keyElement.id;
        playSound(key);
    });
});


//SUONA CON TASTI


//TASTI BIANCHI
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 49) {
        playSound("do");
    }
});


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 50) {
        playSound("re");
    }
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 51) {
        playSound("mi");
    }
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 52) {
        playSound("fa");
    }
});


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 53) {
        playSound("sol");
    }
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 54) {
        playSound("la");
    }
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 55) {
        playSound("si");
    }
});










//TASTI NERI

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 81) {
        playSound("dodiesis");
    }
});


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {
        playSound("rediesis");
    }
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 69) {
        playSound("fadiesis");
    }
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 82) {
        playSound("soldiesis");
    }
});


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 84) {
        playSound("ladiesis");
    }
});