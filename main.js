let state = {
  bottoms: 0,
  hair: 0,
  shirt: 0,
  shoes: 0,
  accessory: 0,
  face: 0,
};
const SHIRT_COUNT = 4;

nextbottoms();
nexthair();
nextshirt();
nextshoes();
nextface();
updateShirtCarousel();

function getShirtPreviewIndex(indexOffset) {
  const current = state.shirt === 0 ? 1 : state.shirt;
  return ((current - 1 + indexOffset + SHIRT_COUNT) % SHIRT_COUNT) + 1;
}

function setShirtPreview(imgId, nameId, shirtIndex) {
  const image = document.querySelector(`#${imgId}`);
  const name = document.querySelector(`#${nameId}`);

  if (!image || !name) {
    return;
  }

  image.src = `./images4/shirt${shirtIndex}.png`;
  name.textContent = `Shirt ${shirtIndex}`;
}

function updateShirtCarousel() {
  setShirtPreview("shirtPrevImg", "shirtPrevName", getShirtPreviewIndex(-1));
  setShirtPreview("shirtCurrentImg", "shirtCurrentName", getShirtPreviewIndex(0));
  setShirtPreview("shirtNextImg", "shirtNextName", getShirtPreviewIndex(1));
}

function nextbottoms() {
  let bottoms = document.querySelector("#bottoms");
  if (state.bottoms < 5) {
    state.bottoms++;
    bottoms.setAttribute("class", `bottoms${state.bottoms}`);
  } else if (state.bottoms === 5) {
    state.bottoms = 0;
    bottoms.setAttribute("class", `bottoms${state.bottoms}`);
  }
}

function nextshoes() {
  let shoes = document.querySelector("#shoes");
  if (state.shoes < 3) {
    state.shoes++;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  } else if (state.shoes === 3) {
    state.shoes = 0;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  }
}
function nexthair() {
  let hair = document.querySelector("#hair");
  if (state.hair < 5) {
    state.hair++;
    hair.setAttribute("class", `hair${state.hair}`);
  } else if (state.hair === 5) {
    state.hair = 0;
    hair.setAttribute("class", `hair${state.hair}`);
  }
}

function nextshirt() {
  let shirt = document.querySelector("#shirt");
  if (state.shirt < 4) {
    state.shirt++;
    shirt.setAttribute("class", `shirt${state.shirt}`);
  } else if (state.shirt === 4) {
    state.shirt = 0;
    shirt.setAttribute("class", `shirt${state.shirt}`);
  }

  updateShirtCarousel();
}

function nextface() {
  let face = document.querySelector("#face");
  if (state.face < 2) {
    state.face++;
    face.setAttribute("class", `face${state.face}`);
  } else if (state.face === 2) {
    state.face = 0;
    face.setAttribute("class", `face${state.face}`);
  }
}
