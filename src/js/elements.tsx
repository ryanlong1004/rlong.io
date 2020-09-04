const createTextContainer = (parent: Node) => {
  const target = document.createElement("div");
  target.classList.add("typed-line");
  target.style.display = "inline";
  const blinker = document.getElementById("blinker");
  parent.insertBefore(target, blinker);
  return target;
};

export { createTextContainer };
