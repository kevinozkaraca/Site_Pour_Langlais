const Allbuttons = document.querySelectorAll("#textToSpeech");
let synth = speechSynthesis,
  isSpeaking = true;

Allbuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    textButton = e.target.innerHTML;
    let textReading = new SpeechSynthesisUtterance(e.target.innerText);
    voice = synth.getVoices();

    for (let i = 0; i < voice.length; i++) {
      if (voice[i].lang == "en-US") {
        voice = voice[i];
        voice.getDefault;
        console.log(voice);
        textReading.voice = voice;
        synth.speak(textReading);
      }
    }
  });
});

/*Allbuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    textButton = e.target.innerHTML;
    let textReading = new SpeechSynthesisUtterance(e.target.innerText);
    voice = synth.getVoices()[10];
    voice.lang = "en-US";
    textReading.voice = voice;
    synth.speak(textReading);
  });
});  */
