const app = document.getElementById("app");

const card = document.createElement("div");
card.className = "card";

const greeting = document.createElement("h1");
greeting.innerText = "สุขสันต์วันเกิด 🎉";

const msg = document.createElement("p");
msg.innerHTML = `
  ขอให้เธอมีความสุขมากๆ ในทุกๆ วัน<br>
  ขอให้ทุกเช้าเริ่มต้นด้วยรอยยิ้ม<br>
  เจอแต่เรื่องดีๆ ผู้คนดีๆ และโอกาสดีๆ เข้ามาในชีวิตเสมอ<br>
  ขอให้ปีนี้และทุกปีเต็มไปด้วยความสุข ความสบายใจ และเสียงหัวเราะ<br>
  ยิ้มเยอะๆ นะ เพราะฉันชอบรอยยิ้มของเธอที่สุดเลย<br>
  และไม่ว่าอะไรจะเกิดขึ้น... ฉันจะอยู่ข้างๆ เธอเสมอ :)<br>
  รักน้าา 💖
`;

const video = document.createElement("video");
video.controls = true;
video.autoplay = true;
video.loop = true;
video.innerHTML = `<source src="happy.mp4" type="video/mp4" />`;

const audio = document.createElement("audio");
audio.controls = true;
audio.autoplay = true;
audio.loop = true;
audio.innerHTML = `<source src="music.mp3" type="audio/mp3" />`;

const button = document.createElement("button");
button.innerText = "คลิกเพื่อส่งยิ้ม 😊";
button.onclick = () => {
  alert("ยิ้มของเธอทำให้โลกสดใสขึ้นนะ 💖");
};

card.appendChild(greeting);
card.appendChild(msg);
card.appendChild(video);
card.appendChild(audio);
card.appendChild(button);
app.appendChild(card);
