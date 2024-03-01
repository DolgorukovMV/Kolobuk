function loadPage(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.body.innerHTML = xhr.responseText;

            const audio = document.getElementById("backgroundMusic");
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
            audio.pause();

            volumeModeBtn.addEventListener("click", function () {
                console.log("Volume Mode Button Clicked");
                const volumeIcons = document.getElementById("volumeIcons");

                if (audio.volume === 0) {
                    audio.volume = 0.1;
                    muteIcon.style.display = "none";
                    lowVolumeIcon.style.display = "inline";
                    volumeControl.value = 0.1;
                } else if (audio.volume <= 0.2) {
                    audio.volume = 0.5;
                    lowVolumeIcon.style.display = "none";
                    mediumVolumeIcon.style.display = "inline";
                    volumeControl.value = 0.5;
                } else if (audio.volume <= 0.5) {
                    audio.volume = 1;
                    mediumVolumeIcon.style.display = "none";
                    highVolumeIcon.style.display = "inline";
                    volumeControl.value = 0.8;
                } else {
                    audio.volume = 0;
                    highVolumeIcon.style.display = "none";
                    muteIcon.style.display = "inline";
                    volumeControl.value = 0;
                }

                updateVolumeBar();
                updateVolumeIcons();
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

                updateVolumeIcons(percentage);
                updateVolumeBar();
            }

            playPauseBtn.addEventListener("click", function () {
                if (audio.paused) {
                    audio.play();
                    playIcon.style.display = "none";
                    pauseIcon.style.display = "inline";
                } else {
                    audio.pause();
                    playIcon.style.display = "inline";
                    pauseIcon.style.display = "none";
                }
            });

            function updateVolumeIcons(percentage) {
                if (audio.volume === 0) {
                    muteIcon.style.display = "inline";
                    lowVolumeIcon.style.display = "none";
                    mediumVolumeIcon.style.display = "none";
                    highVolumeIcon.style.display = "none";
                } else if (audio.volume > 0 && audio.volume <= 0.2) {
                    lowVolumeIcon.style.display = "inline";
                    mediumVolumeIcon.style.display = "none";
                    highVolumeIcon.style.display = "none";
                    muteIcon.style.display = "none";
                } else if (audio.volume > 0.2 && audio.volume <= 0.5) {
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
        }
    };
    xhr.send();
}
