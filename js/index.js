function ToResultPage() {
  const inputTempo = document.querySelector('input[name="tempo"]:checked').value;
  const inputSeason = document.querySelector('input[name="season"]:checked').value;
  const inputSound = document.querySelector('input[name="sound"]:checked').value;

  window.location.href = `../html/result.html?tempo=${inputTempo}&season=${inputSeason}&sound=${inputSound}`;
}
