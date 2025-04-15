function sendMessage() {
  const input = document.getElementById("messageInput");
  const messageText = input.value.trim();
  if (messageText === "") return;

  const messages = document.getElementById("messages");

  // Create sent message
  const sentMsg = document.createElement("div");
  sentMsg.className = "message sent";
  sentMsg.innerHTML = `
    <span>${messageText}</span>
    <div class="meta">
      ${getCurrentTime()} <span class="ticks">✔</span>
    </div>
  `;

  messages.appendChild(sentMsg);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;

  // Simulate delivery after 0.5s
  setTimeout(() => {
    const ticks = sentMsg.querySelector(".ticks");
    if (ticks) ticks.innerHTML = "✔✔"; // double tick
  }, 500);

  // Simulate reply after 1.5s
  setTimeout(() => {
    receiveMessage("Cool! 😎");
  }, 1500);
}

function receiveMessage(text) {
  const messages = document.getElementById("messages");

  const receivedMsg = document.createElement("div");
  receivedMsg.className = "message received";
  receivedMsg.innerHTML = `
    <span>${text}</span>
    <div class="meta">${getCurrentTime()}</div>
  `;

  messages.appendChild(receivedMsg);
  messages.scrollTop = messages.scrollHeight;
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
