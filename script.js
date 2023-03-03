// Your script here.

    
        // get references to DOM elements
        const voiceSelect = document.getElementById('voice-select');
        const textToSpeak = document.getElementById('text-to-speak');
        const startButton = document.getElementById('start-button');
        const stopButton = document.getElementById('stop-button');

        // populate voice select dropdown with available voices
        function populateVoiceList() {
            const voices = speechSynthesis.getVoices();
            for (let i = 0; i < voices.length; i++) {
                const option = document.createElement('option');
                option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
                option.value = voices[i].name;
                voiceSelect.appendChild(option);
            }
        }

        // wait for voices to be loaded before populating dropdown
        speechSynthesis.addEventListener('voiceschanged', function() {
            populateVoiceList();
        });

        // start speaking when start button is clicked
        startButton.addEventListener('click', function() {
            const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
            const selectedVoice = voiceSelect.value;
            const voices = speechSynthesis.getVoices();
            for (let i = 0; i < voices.length; i++) {
                if (voices[i].name === selectedVoice) {
                    utterance.voice = voices[i];
                }
            }
            speechSynthesis.speak(utterance);
        });

        // stop speaking when stop button is clicked
        stopButton.addEventListener('click', function() {
            speechSynthesis.canc