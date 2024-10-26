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
