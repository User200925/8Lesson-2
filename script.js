
const textInput = document.getElementById("textinput");
const speakBtn = document.getElementById("SpeakBtn");

function speakText() {
  const text = textInput.value;
  const utterance = new SpeechSynthesisUtterance(text);

  const voices = speechSynthesis.getVoices();
  const selectedVoice = voices.find(
    (voice) => voice.name === "Microsoft Pavel - Russian (Russia)"
  );

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  speechSynthesis.speak(utterance);
}

speakBtn.addEventListener("click", speakText);

speechSynthesis.addEventListener("voiceschanged", () => {
  const voices = speechSynthesis.getVoices();
  console.log(voices);
});
