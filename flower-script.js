const navigationEntry = performance.getEntriesByType("navigation")[0];
if (navigationEntry && navigationEntry.type === "reload") {
  window.location.replace("index.html");
}

window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);

    const messageNode = document.querySelector(".wish-message__text");
    if (!messageNode) return;

    const fullText = messageNode.dataset.text || "";
    const middleIndex = (fullText.length - 1) / 2;
    let index = 0;

    const typeNextCharacter = () => {
      if (index >= fullText.length) {
        messageNode.classList.add("is-done");
        return;
      }

      const character = fullText.charAt(index);
      const characterNode = document.createElement("span");
      characterNode.className = "wish-char";
      characterNode.textContent = character === " " ? "\u00A0" : character;

      const distanceFromMiddle = index - middleIndex;
      const arcY = distanceFromMiddle * distanceFromMiddle * 0.028;
      const tilt = distanceFromMiddle * 0.7;
      characterNode.style.transform = `translateY(${arcY}px) rotate(${tilt}deg)`;

      messageNode.appendChild(characterNode);
      index += 1;

      const delay = character === " " ? 72 : 55;
      setTimeout(typeNextCharacter, delay);
    };

    setTimeout(typeNextCharacter, 500);
  }, 1000);
};