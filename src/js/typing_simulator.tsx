import { sleep, randomMSDelay } from "./sleep";
import { createTextContainer } from "./elements";

const typingSimulator = async (target: Node, text: string) => {
  const second = 1000;
  const sentenceDelay = 2 * second;
  const initialDelay = 2 * second;

  await sleep(initialDelay);
  for (let i = 0; i < text.length; i++) {
    let textContainer = createTextContainer(target);

    textContainer.focus(); // you can also use input.focus()
    textContainer.textContent = "";
    let sentence = text[i];

    for (let y = 0; y < sentence.length + 1; y++) {
      let currentText = text[i].substr(0, y + 1);
      y++;
      textContainer.textContent = currentText;
      await sleep(randomMSDelay());
    }
    await sleep(sentenceDelay);
    textContainer.style.display = "block";
  }
};

export { typingSimulator };
