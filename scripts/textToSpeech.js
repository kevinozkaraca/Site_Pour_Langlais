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
        voice = synth.getVoices()[i];
        textReading.voice = voice;
        synth.speak(textReading);
        console.log(voice);
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
