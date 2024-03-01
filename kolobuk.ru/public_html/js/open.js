

var originalContent


function onPageLoad() {
    originalContent = document.getElementById("mainContent").innerHTML

    var urlParams = new URLSearchParams(window.location.search)
    var page = urlParams.get("page")

    if (page === "2" || page === "3") {
        loadAndPlayMusic(page);

    }
}


window.onload = onPageLoad

function loadContent(page) {
    var mainContent = document.getElementById("mainContent")
    
    if (page === "main.html" ) {
        mainContent.innerHTML = originalContent
            stopMusic() // Останавливаем музыку при возврате на главную страницу
        return
    }

    var xhr = new XMLHttpRequest()
    let currentBeginAudioInstance = null;
    let currentContinueAudioInstance = null;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            mainContent.innerHTML = xhr.responseText
            setTimeout(function() {
                drawCaptcha(currentCaptchaNumber);
            }, 250); // задержка в 1 секунду (можно изменить)
            
            
            // Добавим проверку на страницу 2 и 3 после загрузки контента
            if ( page === "main.html" || page === "privacy_policy.txt" || page === "user_agreement.txt" || page === "game1.txt" || page === "game5.txt" || page === "index.txt" || page === "game4.txt" || page === "reslult-2.txt" || page === "reslult-3.txt" || page === "reslult-4.txt" || page === "result.txt") {
                closesArrow()
                console.log('выполнено1')

                
            }

            if ( page === "game1.txt" || page === "user_agreement.txt" || page === "privacy_policy.txt" || page === "game5.txt" || page === "index.txt" || page === "game4.txt" || page === "reslult-2.txt" || page === "reslult-3.txt" || page === "reslult-4.txt" || page === "result.txt") {
                const volumeSlider = document.getElementById('volumeSlider');
                const volumeModeBtn = document.getElementById("volumeModeBtn");
                const muteIcon = document.getElementById("muteIcon");
                const lowVolumeIcon = document.getElementById("lowVolumeIcon");
                const mediumVolumeIcon = document.getElementById("mediumVolumeIcon");
                const highVolumeIcon = document.getElementById("highVolumeIcon");
                const playIcon = document.getElementById("playIcon");
                const pauseIcon = document.getElementById("pauseIcon");
                const playPauseBtn = document.getElementById("playPauseBtn");
            
                const menuToggle = document.getElementById('menu__toggle');
                const closeArrow = document.getElementById('closeArrow');
            
                
                highVolumeIcon.style.display = "inline";
                muteIcon.style.display = "none";
                lowVolumeIcon.style.display = "none";
                mediumVolumeIcon.style.display = "none";
                playIcon.style.display = "inline";
                pauseIcon.style.display = "none";
                
            
            
                volumeModeBtn.addEventListener("click", function () {
                    console.log("Volume Mode Button Clicked");
                    const volumeIcons = document.getElementById("volumeIcons");
            
                    if (audio.volume === 0 && audio2.volume === 0) {
                        audio.volume = 0.1;
                        audio2.volume = 0.1;
                        setVolumeToOtherAudioInstances(0.1);
                        muteIcon.style.display = "none";
                        lowVolumeIcon.style.display = "inline";
                        volumeControl.value = 0.1;
                    } else if (audio.volume <= 0.2 && audio2.volume <= 0.2) {
                        audio.volume = 0.5;
                        audio2.volume = 0.5;
                        setVolumeToOtherAudioInstances(0.5);
                        lowVolumeIcon.style.display = "none";
                        mediumVolumeIcon.style.display = "inline";
                        volumeControl.value = 0.5;
                    } else if (audio.volume <= 0.5 && audio2.volume <= 0.5) {
                        audio.volume = 1;
                        audio2.volume = 1;
                        setVolumeToOtherAudioInstances(1);
                        mediumVolumeIcon.style.display = "none";
                        highVolumeIcon.style.display = "inline";
                        volumeControl.value = 0.8;
                    } else {
                        audio.volume = 0;
                        audio2.volume = 0;
                        setVolumeToOtherAudioInstances(0);
                        highVolumeIcon.style.display = "none";
                        muteIcon.style.display = "inline";
                        volumeControl.value = 0;
                    }
                    

            
                    updateVolumeBar(); // Добавлен вызов функции updateVolumeBar после изменения уровня громкости
                    updateVolumeIcons(); // Вызывайте эту функцию для обновления иконок
                });
        
                const volumeBar = document.getElementById("volume-bar");
                const volumeFill = document.getElementById("volume-fill");
                const volumeControl = document.getElementById("volume-control");
            
                volumeControl.style.left = "100%";
            
                volumeControl.addEventListener("mousedown", function (event) {
                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseup", function () {
                        document.removeEventListener("mousemove", handleMouseMove);
                    });
                });
        
        
                function handleMouseMove(event) {
                    const barRect = volumeBar.getBoundingClientRect();
                    const fillWidth = Math.min(Math.max(0, event.clientX - barRect.left), barRect.width);
                    const percentage = fillWidth / barRect.width;
                    volumeFill.style.width = percentage * 100 + "%";
                    volumeControl.style.left = percentage * 100 + "%";
                    audio.volume = percentage;
                    audio2.volume = percentage;
                    setVolumeToOtherAudioInstances(percentage);

                    updateVolumeIcons(percentage);
                    updateVolumeBar(); // Добавлен вызов функции updateVolumeBar после изменения уровня громкости
                }

                function setVolumeToOtherAudioInstances(volume) {
                    audio3 && (audio3.volume = volume);
                    audio4 && (audio4.volume = volume);
                    audio5 && (audio5.volume = volume);
                    audio6 && (audio6.volume = volume);
                    audio7 && (audio7.volume = volume);
                    audio8 && (audio8.volume = volume);
                    audio9 && (audio9.volume = volume);
                    audio10 && (audio10.volume = volume);
                }

                playPauseBtn.addEventListener("click", function () {
                    if (audio.paused ) {
                        audio.play();
                        playIcon.style.display = "inline";
                        pauseIcon.style.display = "none";
                        if (currentContinueAudioInstance) {
                            currentContinueAudioInstance.play();
                        } else {
                            currentBeginAudioInstance.play();
                        }
                    } else {
                        audio.pause();
                        playIcon.style.display = "none";
                        pauseIcon.style.display = "inline";
                        if (currentContinueAudioInstance) {
                            currentContinueAudioInstance.pause();
                        } else {
                            currentBeginAudioInstance.pause();
                        }
                    }
                });
            
                function updateVolumeIcons(percentage) {
                    if (audio.volume === 0 || audio2.volume === 0) {
                        muteIcon.style.display = "inline";
                        lowVolumeIcon.style.display = "none";
                        mediumVolumeIcon.style.display = "none";
                        highVolumeIcon.style.display = "none";
                    } else if (audio.volume > 0 && audio.volume <= 0.2 || audio2.volume > 0 && audio2.volume <= 0.2) {
                        lowVolumeIcon.style.display = "inline";
                        mediumVolumeIcon.style.display = "none";
                        highVolumeIcon.style.display = "none";
                        muteIcon.style.display = "none";
                    } else if (audio.volume > 0.2 && audio.volume <= 0.5 || audio2.volume > 0.2 && audio2.volume <= 0.5) {
                        mediumVolumeIcon.style.display = "inline";
                        lowVolumeIcon.style.display = "none";
                        highVolumeIcon.style.display = "none";
                        muteIcon.style.display = "none";
                    } else {
                        highVolumeIcon.style.display = "inline";
                        lowVolumeIcon.style.display = "none";
                        mediumVolumeIcon.style.display = "none";
                        muteIcon.style.display = "none";
                    }
                    

                }
            
                function updateVolumeBar() {
                    const percentage = audio.volume * 100;
                    volumeFill.style.width = percentage + "%";
                    volumeControl.style.left = percentage + "%";
                }
                

                console.log('выполнено1')

                
            }

            if (page === "index.txt") {
                createGameBoard()
                console.log('выполнено2')

            }

            if (page === "result.txt") {
                getcard()
                console.log('выполнено3')

            }

            if (page === "reslult-2.txt") {
                getcardsecond()
                console.log('выполнено4')

            }

            if (page === "reslult-3.txt") {
                getcardthird()
                console.log('выполнено5')

            }

            if (page === "reslult-4.txt") {
                getcardfourth()
                console.log('выполнено6')

            }

            if ( page === "privacy_policy.txt" || page === "user_agreement.txt" || page === "feedback.txt") {
                stopMusic() // Останавливаем музыку при возврате на главную страницу
                return
                console.log(' Останавливаем музыку при возврате на главную страницу')

                
            }
            
            if (page === "feedback.txt") {
                drawCaptcha(currentCaptchaNumber);
                return
                console.log('выполнено6')
            }

            if (page === "feedback.html") {
                generateRandomNumber()
                return
            }

            
            
            if (page === "result.txt") {
                playSoundWorlds('media/m1.mp3', function() {
                    // Получаем данные о выбранных картах из localStorage
                    console.log('Получаем данные о выбранных картах из localStorage');
                    const flippedCardsData = localStorage.getItem('flippedCards');
                    console.log('flippedCardsData from localStorage:', flippedCardsData);
                    const flippedCards = JSON.parse(flippedCardsData);
                    console.log('flippedCards:', flippedCards);
                    playSound1(`Card ${flippedCards[0]}`, () => currentContinueAudioInstance = audio3);
                    console.log('выполнено опен');
                }, () => currentBeginAudioInstance = audio7);
            } else {
                // Остановить воспроизведение звука, если он уже проигрывается
                stopSoundWorlds();
                stopVoice1();
                console.log('выполнено стоп');
            }

            if (page === "reslult-2.txt") {
                playSoundWorlds1('media/m2.mp3', function() {
                    // Получаем данные о выбранных картах из localStorage
                    console.log('Получаем данные о выбранных картах из localStorage');
                    const flippedCardsData = localStorage.getItem('flippedCards');
                    console.log('flippedCardsData from localStorage:', flippedCardsData);
                    const flippedCards = JSON.parse(flippedCardsData);
                    console.log('flippedCards:', flippedCards);
                    playSound2(`Card ${flippedCards[1]}`, () => currentContinueAudioInstance = audio4);
                    console.log('выполнено опен');
                }, () => currentBeginAudioInstance = audio8);
            } else {
                // Остановить воспроизведение звука, если он уже проигрывается
                stopSoundWorlds1();
                stopVoice2();
                console.log('выполнено стоп');
            }

            if (page === "reslult-3.txt") {
                playSoundWorlds2('media/m3.mp3', function() {
                    // Получаем данные о выбранных картах из localStorage
                    console.log('Получаем данные о выбранных картах из localStorage');
                    const flippedCardsData = localStorage.getItem('flippedCards');
                    console.log('flippedCardsData from localStorage:', flippedCardsData);
                    const flippedCards = JSON.parse(flippedCardsData);
                    console.log('flippedCards:', flippedCards);
                    playSound2(`Card ${flippedCards[2]}`, () => currentContinueAudioInstance = audio4);
                    console.log('выполнено опен');
                }, () => currentBeginAudioInstance = audio9);
            } else {
                // Остановить воспроизведение звука, если он уже проигрывается
                stopSoundWorlds2();
                stopVoice3();
                console.log('выполнено стоп');
            }

            if (page === "reslult-4.txt") {
                playSoundWorlds3('media/m4.mp3', function() {
                    // Получаем данные о выбранных картах из localStorage
                    console.log('Получаем данные о выбранных картах из localStorage');
                    const flippedCardsData = localStorage.getItem('flippedCards');
                    console.log('flippedCardsData from localStorage:', flippedCardsData);
                    const flippedCards = JSON.parse(flippedCardsData);
                    console.log('flippedCards:', flippedCards);
                    playSound2(`Card ${flippedCards[3]}`, () => currentContinueAudioInstance = audio4);
                    console.log('выполнено опен');
                }, () => currentBeginAudioInstance = audio10);
            } else {
                // Остановить воспроизведение звука, если он уже проигрывается
                stopSoundWorlds3();
                stopVoice4();
                console.log('выполнено стоп');
            }
             


        
            if (page === "game1.txt") {
                playSoundStart('media//00.mp3');
                console.log('голос');
            } else {
                // Остановить воспроизведение звука, если он уже проигрывается
                stopSoundStart();
            }
            

        
            if (page === "game1.txt") {
                playPauseBtn.addEventListener("click", function () {
                if (audio2.paused) {
                    audio2.play();
                    playIcon.style.display = "inline";
                    pauseIcon.style.display = "none";
            } else {
                    audio2.pause();
                    playIcon.style.display = "none";
                    pauseIcon.style.display = "inline";
                }




            });


            

            




        }
    }
}         
    xhr.open("GET", page, true)
    xhr.send()
}

