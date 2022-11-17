const Allbuttons = document.querySelectorAll("#textToSpeech");
let synth = speechSynthesis,
  isSpeaking = true;
let voice = synth.getVoices()[10];

// Lecture du contentu HTML
Allbuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    textButton = e.target.innerHTML;
    let textReading = new SpeechSynthesisUtterance(textButton);
    voicelocalService = false;
    textReading.voice = voice;
    textReading.lang = "en-US";
    textReading.text = textButton;
    textReading.pitch = 1.0;
    textReading.rate = 1.0;
    textReading.volume = 1.0;
    textReading.voice = voice;
    textReading.voiceURI = "Google US English";
    synth.speak(textReading);
  });
});
