const Allbuttons = document.querySelectorAll("#textToSpeech");
let synth = speechSynthesis,
  isSpeaking = true,
  getLang = "en-US",
  lang = "en-US",
  getdefault = true;

Allbuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    textButton = e.target.innerHTML;
    let textReading = new SpeechSynthesisUtterance(e.target.innerText);
    voice = synth.getVoices();
    for (let i = 0; i < voice.length; i++) {
      if (voice[i].name == "Google US English") {
        voice = voice[i];
        voice.default = voice[i];
        voicelocalService = false;
        voice["default"] = true;
        textReading.voice = voice;
        textReading.lang = "en-US";
        textReading.text = e.target.innerText;
        textReading.pitch = 1.0;
        textReading.rate = 1.0;
        textReading.volume = 1.0;
        textReading.voice = voice;
        textReading.voice.default = true;

        textReading.voiceURI = "Google US English";
        console.log(textReading);
        synth.speak(textReading);
      }
    }
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
