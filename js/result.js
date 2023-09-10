const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const url = "https://estsoft-openai-api.jejucodingcamp.workers.dev/";
const questionData = [
  {"role": "system", "content": "assistant는 올드팝 전문가이다."},
  {"role": "user", "content": `${params.season}에 어울리는 ${params.tempo} 올드팝을 추천해줘. ${params.sound} 소리가 들어간 노래였으면 좋겠어. 결과는 다른 말은 하지 말고 가수-노래제목(발매년도)만 한 줄씩 표시해줘. 노래는 최대 5개만 알려주면 돼. 노래 5개는 매번 랜덤으로 선정해줘.`}
];

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(questionData),
  redirect: "follow",
})
.then(response => response.json())
.then(data => {
  const resultContent = data.choices[0].message.content;
  document.getElementById("loading-message").style.display = "none";
  document.getElementById("result-content").innerText = resultContent;
  document.getElementById("result-content").style.display = "block";
})

function ToMainPage() {
  window.location.href = "index.html";
}
