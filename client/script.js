import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat-container");

loadInterval;

function loader(e) {
  e.textContent = "";

  loadInterval = setInterval(() => {
    e.textContent += ".";

    if (e.textContent.length > 3) {
      e.textContent = "";
    }
  }, 300);
}

function typeText(e, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      e.innerHTML += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function generateId() {
  const timestamp = Date.now();
  const random = Math.random();
  const hexadecimalString = random.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe(isAi, value, id) {
  return `
    <div class="wrapper ${isAi && "ai"}">
      <div class="chat">
        <div class="profile">
          <img
            src="${isAi ? bot : user}"
            alt="${isAi ? "bot" : "user"}"
          >
        </div>
        <div class="message" id=${id}>
          ${value}
      </div>
    </div>
    `;
}
