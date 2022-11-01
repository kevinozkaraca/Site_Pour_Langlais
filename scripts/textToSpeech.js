const Allbuttons = document.querySelectorAll("#textToSpeech");
let synth = speechSynthesis,
  isSpeaking = true;
let voice = synth.getVoices()[10];

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
    console.log(textReading);
    synth.speak(textReading);
  });
});

/*
Allbuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    textButton = e.target.innerHTML;
    let textReading = new SpeechSynthesisUtterance(e.target.innerText);
    voice = synth.getVoices()[10];
    textReading.lang = "en-US";
    textReading.text = e.target.innerText;
    textReading.pitch = 1;
    textReading.rate = 1;
    textReading.volume = 100;
    textReading.voice = voice;
    synth.speak(textReading);
  });
});
*/
