let state = {
  bottoms: 1,
  hair: 1,
  shirt: 1,
  shoes: 1,
  accessory: 0,
  face: 1,
  bangs: 1,
};

const BOTTOMS_COUNT = 5;
const SHOES_COUNT = 3;
const BANGS_COUNT = 3;
const HAIR_COUNT = 5;
const SHIRT_COUNT = 4;
const FACE_COUNT = 2;

setLayerClass("bottoms", "bottoms", state.bottoms);
setLayerClass("shoes", "shoes", state.shoes);
setLayerClass("hair", "hair", state.hair);
setLayerClass("shirt", "shirt", state.shirt);
setLayerClass("face", "face", state.face);
setLayerClass("bangs", "bangs", state.bangs);

updateBottomsCarousel();
updateShoesCarousel();
updateBangsCarousel();
updateHairCarousel();
updateShirtCarousel();
updateFaceCarousel();

function setLayerClass(elementId, classPrefix, value) {
  const element = document.querySelector(`#${elementId}`);
  if (!element) {
    return;
  }
  element.setAttribute("class", `${classPrefix}${value}`);
}

function getPreviewIndex(current, count, indexOffset) {
  return ((current - 1 + indexOffset + count) % count) + 1;
}

function setPreview(imgId, nameId, imagePath, labelText) {
  const image = document.querySelector(`#${imgId}`);
  const name = document.querySelector(`#${nameId}`);

  if (!image || !name) {
    return;
  }

  image.src = imagePath;
  name.textContent = labelText;
}

function nextValue(current, count) {
  if (current < count) {
    return current + 1;
  }
  return 1;
}

/* ---------- BOTTOMS ---------- */

function updateBottomsCarousel() {
  const prev = getPreviewIndex(state.bottoms, BOTTOMS_COUNT, -1);
  const current = getPreviewIndex(state.bottoms, BOTTOMS_COUNT, 0);
  const next = getPreviewIndex(state.bottoms, BOTTOMS_COUNT, 1);

  setPreview("bottomsPrevImg", "bottomsPrevName", `./images4/bottoms${prev}.png`, `Bottoms ${prev}`);
  setPreview("bottomsCurrentImg", "bottomsCurrentName", `./images4/bottoms${current}.png`, `Bottoms ${current}`);
  setPreview("bottomsNextImg", "bottomsNextName", `./images4/bottoms${next}.png`, `Bottoms ${next}`);
}

function nextbottoms() {
  state.bottoms = nextValue(state.bottoms, BOTTOMS_COUNT);
  setLayerClass("bottoms", "bottoms", state.bottoms);
  updateBottomsCarousel();
}

/* ---------- SHOES ---------- */

function getShoesImagePath(index) {
  if (index === 1) {
    return "./images4/shoes1 2.png";
  }
  if (index === 2) {
    return "./images4/shoes2 2.png";
  }
  return "./images4/shoes3.png";
}

function updateShoesCarousel() {
  const prev = getPreviewIndex(state.shoes, SHOES_COUNT, -1);
  const current = getPreviewIndex(state.shoes, SHOES_COUNT, 0);
  const next = getPreviewIndex(state.shoes, SHOES_COUNT, 1);

  setPreview("shoesPrevImg", "shoesPrevName", getShoesImagePath(prev), `Shoes ${prev}`);
  setPreview("shoesCurrentImg", "shoesCurrentName", getShoesImagePath(current), `Shoes ${current}`);
  setPreview("shoesNextImg", "shoesNextName", getShoesImagePath(next), `Shoes ${next}`);
}

function nextshoes() {
  state.shoes = nextValue(state.shoes, SHOES_COUNT);
  setLayerClass("shoes", "shoes", state.shoes);
  updateShoesCarousel();
}

/* ---------- BANGS ---------- */

function updateBangsCarousel() {
  const prev = getPreviewIndex(state.bangs, BANGS_COUNT, -1);
  const current = getPreviewIndex(state.bangs, BANGS_COUNT, 0);
  const next = getPreviewIndex(state.bangs, BANGS_COUNT, 1);

  setPreview("bangsPrevImg", "bangsPrevName", `./images4/bangs${prev}.png`, `Bangs ${prev}`);
  setPreview("bangsCurrentImg", "bangsCurrentName", `./images4/bangs${current}.png`, `Bangs ${current}`);
  setPreview("bangsNextImg", "bangsNextName", `./images4/bangs${next}.png`, `Bangs ${next}`);
}

function nextbangs() {
  state.bangs = nextValue(state.bangs, BANGS_COUNT);
  setLayerClass("bangs", "bangs", state.bangs);
  updateBangsCarousel();
}

/* ---------- HAIR ---------- */

function updateHairCarousel() {
  const prev = getPreviewIndex(state.hair, HAIR_COUNT, -1);
  const current = getPreviewIndex(state.hair, HAIR_COUNT, 0);
  const next = getPreviewIndex(state.hair, HAIR_COUNT, 1);

  setPreview("hairPrevImg", "hairPrevName", `./images4/hair${prev}.png`, `Hair ${prev}`);
  setPreview("hairCurrentImg", "hairCurrentName", `./images4/hair${current}.png`, `Hair ${current}`);
  setPreview("hairNextImg", "hairNextName", `./images4/hair${next}.png`, `Hair ${next}`);
}

function nexthair() {
  state.hair = nextValue(state.hair, HAIR_COUNT);
  setLayerClass("hair", "hair", state.hair);
  updateHairCarousel();
}

/* ---------- SHIRT ---------- */

function updateShirtCarousel() {
  const prev = getPreviewIndex(state.shirt, SHIRT_COUNT, -1);
  const current = getPreviewIndex(state.shirt, SHIRT_COUNT, 0);
  const next = getPreviewIndex(state.shirt, SHIRT_COUNT, 1);

  setPreview("shirtPrevImg", "shirtPrevName", `./images4/shirt${prev}.png`, `Shirt ${prev}`);
  setPreview("shirtCurrentImg", "shirtCurrentName", `./images4/shirt${current}.png`, `Shirt ${current}`);
  setPreview("shirtNextImg", "shirtNextName", `./images4/shirt${next}.png`, `Shirt ${next}`);
}

function nextshirt() {
  state.shirt = nextValue(state.shirt, SHIRT_COUNT);
  setLayerClass("shirt", "shirt", state.shirt);
  updateShirtCarousel();
}

/* ---------- FACE ---------- */

function updateFaceCarousel() {
  const prev = getPreviewIndex(state.face, FACE_COUNT, -1);
  const current = getPreviewIndex(state.face, FACE_COUNT, 0);
  const next = getPreviewIndex(state.face, FACE_COUNT, 1);

  setPreview("facePrevImg", "facePrevName", `./images4/face${prev}.png`, `Face ${prev}`);
  setPreview("faceCurrentImg", "faceCurrentName", `./images4/face${current}.png`, `Face ${current}`);
  setPreview("faceNextImg", "faceNextName", `./images4/face${next}.png`, `Face ${next}`);
}

function nextface() {
  state.face = nextValue(state.face, FACE_COUNT);
  setLayerClass("face", "face", state.face);
  updateFaceCarousel();
}