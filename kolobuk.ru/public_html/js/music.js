
var playlist = [
    'media/Fearless Motivation Instrumentals-Connected.mp3',
    'media/Fearless Motivation Instrumentals-Donnaste.mp3',
    'media/Fearless Motivation Instrumentals-Grace.mp3',
    'media/Fearless Motivation Instrumentals-Maksimus.mp3',
    'media/Fearless Motivation Instrumentals-Masara.com.mp3',
    'media/Fearless_Motivation_Instrumentals_Connected_Extended_Version_kissvk.mp3',
    'media/Fearless Motivation Instrumentals-Blessed.mp3',
    'media/Fearless Motivation Instrumentals-Ease.mp3',
    'media/Fearless_Motivation_Instrumentals_Blessed_Extended_Version_com.mp3',
    // Добавьте все ваши аудиофайлы в этот массив
];

let audio2;
let audio3;
let audio4;
let audio5;
let audio6;
let audio7;
let audio8;
let audio9;
let audio10;

let flippedCards;

function playMusic() {
        // Выбираем случайный файл из плейлиста
    var randomIndex = Math.floor(Math.random() * playlist.length);
    var randomAudioFile = playlist[randomIndex];

    audio = new Audio(randomAudioFile);
    audio.addEventListener('loadeddata', function() {
        audio.play();
    
    });

    // Добавим обработчик события ended для повторного воспроизведения
    audio.addEventListener('ended', function() {
        playMusic(); // Вызываем функцию для нового воспроизведения
    });
}

function loadAndPlayMusic(page) {
    loadContent(page);
    playMusic();
}

function stopMusic() {
    if (audio) {
        audio.pause(); // Приостанавливаем воспроизведение
        audio.currentTime = 0; // Устанавливаем текущее время на начало, чтобы при следующем воспроизведении начать с начала
    }
}

function playSoundStart(soundFilePath) {
    audio2 = new Audio(soundFilePath);
    audio2.play();
}

function stopSoundStart() {
    if (audio2) {
        audio2.pause();
    }
}

function playSound1(card, cb) {
    audio3 = new Audio(audioFiles[card]);
    cb();
    audio3.addEventListener('loadeddata', function() {
        audio3.play();
    });
}

function stopVoice1() {
    if (audio3) {
        audio3.pause(); // Приостанавливаем воспроизведение
        audio3.currentTime = 0; // Устанавливаем текущее время на начало, чтобы при следующем воспроизведении начать с начала
    }

}

function playSound2(card, cb) {
    audio4 = new Audio(audioFiles[card]);
    cb();
    audio4.addEventListener('loadeddata', function() {
        audio4.play();
    });
}

function stopVoice2() {
    if (audio4) {
        audio4.pause(); // Приостанавливаем воспроизведение
        audio4.currentTime = 0; // Устанавливаем текущее время на начало, чтобы при следующем воспроизведении начать с начала
    }

}

function playSound3(card) {
    audio5 = new Audio(audioFiles[card]);
    audio5.addEventListener('loadeddata', function() {
        audio5.play();
    
    });
}

function stopVoice3() {
    if (audio5) {
        audio5.pause(); // Приостанавливаем воспроизведение
        audio5.currentTime = 0; // Устанавливаем текущее время на начало, чтобы при следующем воспроизведении начать с начала
    }

}

function playSound4(card) {
    audio6 = new Audio(audioFiles[card]);
    audio6.addEventListener('loadeddata', function() {
        audio6.play();
    
    });
}

function stopVoice4() {
    if (audio6) {
        audio6.pause(); // Приостанавливаем воспроизведение
        audio6.currentTime = 0; // Устанавливаем текущее время на начало, чтобы при следующем воспроизведении начать с начала
    }

}

function playSoundWorlds(soundFilePath, callback, cb) {
    audio7 = new Audio(soundFilePath);
    cb();
    audio7.onended = callback; // Задаем обратный вызов
    audio7.addEventListener('loadeddata', function() {
        audio7.play();
    
    });
}


function stopSoundWorlds() {
    if (audio7) {
        audio7.pause();
    }
}

function playSoundWorlds1(soundFilePath, callback, cb) {
    audio8 = new Audio(soundFilePath);
    cb();
    audio8.onended = callback; // Задаем обратный вызов
    audio8.addEventListener('loadeddata', function() {
        audio8.play();
    
    });
}

function stopSoundWorlds1() {
    if (audio8) {
        audio8.pause();
    }
}


function playSoundWorlds2(soundFilePath, callback, cb) {
    audio9 = new Audio(soundFilePath);
    cb();
    audio9.onended = callback; // Задаем обратный вызов
    audio9.addEventListener('loadeddata', function() {
        audio9.play();
    
    });
}

function stopSoundWorlds2() {
    if (audio9) {
        audio9.pause();
    }
}

function playSoundWorlds3(soundFilePath, callback, cb) {
    audio10 = new Audio(soundFilePath);
    cb();
    audio10.onended = callback; // Задаем обратный вызов
    audio10.addEventListener('loadeddata', function() {
        audio10.play();
    
    });
}

function stopSoundWorlds3() {
    if (audio10) {
        audio10.pause();
    }
}