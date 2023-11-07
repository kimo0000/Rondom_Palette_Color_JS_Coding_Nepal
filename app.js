const liste_color = document.querySelector("ul"),
  btn_refresh = document.querySelector(".btn_refresh");

let palatteColor = 32;

const updateColorDIV = () => {
  liste_color.innerHTML = "";
  for (let i = 0; i < palatteColor; i++) {
    let hexRomdon = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

    const liEl = document.createElement("li");
    liEl.classList.add("color");
    liEl.innerHTML = `<div class="color_el" style="background-color: ${hexRomdon}"></div>
                <span class="hex">${hexRomdon}</span>`;

    liste_color.appendChild(liEl);

    liEl.addEventListener("click", () => copiedHexColor(liEl, hexRomdon));
  }
};

const copiedHexColor = (el, hex) => {
  navigator.clipboard.writeText(hex);
  const spanEl = el.querySelector(".hex");
  spanEl.innerText = `Copied 🗸`;
  setTimeout(() => (spanEl.innerText = hex), 1500);
};

btn_refresh.addEventListener("click", updateColorDIV);
