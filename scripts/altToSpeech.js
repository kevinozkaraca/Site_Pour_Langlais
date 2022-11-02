const Allimages = document.querySelectorAll("#altToSpeech");
let synth = speechSynthesis,
  isSpeaking = true;
let voice = synth.getVoices()[10];

Allimages.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    textimage = e.target.alt;
    console.log(e.target.alt);
    let textReading = new SpeechSynthesisUtterance(textimage);
    voicelocalService = false;
    textReading.voice = voice;
    textReading.lang = "en-US";
    textReading.text = textimage;
    textReading.pitch = 1.0;
    textReading.rate = 1.0;
    textReading.volume = 1.0;
    textReading.voice = voice;
    textReading.voiceURI = "Google US English";
    synth.speak(textReading);
  });
});
