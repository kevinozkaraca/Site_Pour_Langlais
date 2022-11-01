const Allbuttons = document.querySelectorAll("#textToSpeech");
let synth = speechSynthesis,
  isSpeaking = true;

Allbuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    textButton = e.target.innerHTML;
    let textReading = new SpeechSynthesisUtterance(e.target.innerText);
    synth.getVoices()[10].default = true;
    voice = synth.getVoices()[10];
    voice.default = true;
    voice.lang = "en-US";

    textReading.voice = voice;
    synth.speak(textReading);
    console.log(voice.lang);
  });
});
