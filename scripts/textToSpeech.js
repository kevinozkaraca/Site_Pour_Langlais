const Allbuttons = document.querySelectorAll("#textToSpeech");
let synth = speechSynthesis,
  isSpeaking = true;

Allbuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    textButton = e.target.innerHTML;
    let textReading = new SpeechSynthesisUtterance(e.target.innerText);
    voice = synth.getVoices();
    textReading.lang = "en-US";
    console.log(textReading);
    synth.speak(textReading);
  });
});
