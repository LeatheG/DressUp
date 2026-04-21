let state = {
  bottoms: 1,
  hair: 1,
  shirt: 1,
  shoes: 1,
  face: 1,
  bangs: 1,
  skin: 1,
};

const BOTTOMS_COUNT = 5;
const SHOES_COUNT = 3;
const BANGS_COUNT = 8;
const HAIR_COUNT = 8;
const SHIRT_COUNT = 8;
const FACE_COUNT = 6;
const HAIR_IMAGE_FILES = [
  "hair0.png",
  "hair1.png",
  "hair2.PNG",
  "hair3.png",
  "hair4.png",
  "hair5.PNG",
  "hair6.PNG",
  "hair7.PNG",
];
const SHIRT_IMAGE_FILES = [
  "shirt1.PNG",
  "shirt2.PNG",
  "shirt3.PNG",
  "shirt4.PNG",
  "shirt5.PNG",
  "shirt6.PNG",
  "shirt7.PNG",
  "shirt8.PNG",
];

setLayerClass("bottoms", "bottoms", state.bottoms);
setLayerClass("shoes", "shoes", state.shoes);
setHairLayerClass();
setLayerClass("shirt", "shirt", state.shirt);
setLayerClass("face", "face", state.face);
setLayerClass("bangs", "bangs", state.bangs);
setLayerClass("skin", "skin", state.skin);

updateBottomsCarousel();
updateShoesCarousel();
updateBangsCarousel();
updateHairCarousel();
updateShirtCarousel();
updateFaceButtons();
updateSkinButtons();

const playlist = [
  "./images4/BeepBox-Song.mp3", 
  "./images4/BeepBox-Song1.mp3" 
];

let currentTrack = 0;

function setLayerClass(elementId, classPrefix, value) {
  const element = document.querySelector(`#${elementId}`);
  if (!element) return;
  element.setAttribute("class", `${classPrefix}${value}`);
}

function setHairLayerClass() {
  const hairElement = document.querySelector("#hair");
  if (!hairElement) return;
  hairElement.setAttribute("class", `hair${state.hair - 1}`);
}

function nextValue(current, count) {
  return current < count ? current + 1 : 1;
}

/* ---------- BOTTOMS ---------- */

function getBottomsIndex(current, offset) {
  return ((current - 1 + offset + BOTTOMS_COUNT) % BOTTOMS_COUNT) + 1;
}

function setBottomsPreview(imgId, index) {
  const img = document.getElementById(imgId);
  if (img) img.src = `./images4/bottoms${index}.png`;
}

function updateBottomsCarousel() {
  setBottomsPreview("bottomsFarPrevImg", getBottomsIndex(state.bottoms, -2));
  setBottomsPreview("bottomsPrevImg", getBottomsIndex(state.bottoms, -1));
  setBottomsPreview("bottomsCurrentImg", state.bottoms);
  setBottomsPreview("bottomsNextImg", getBottomsIndex(state.bottoms, 1));
  setBottomsPreview("bottomsFarNextImg", getBottomsIndex(state.bottoms, 2));
}

function nextbottoms() {
  state.bottoms = nextValue(state.bottoms, BOTTOMS_COUNT);
  setLayerClass("bottoms", "bottoms", state.bottoms);
  updateBottomsCarousel();
}

function prevbottoms() {
  state.bottoms = state.bottoms > 1 ? state.bottoms - 1 : BOTTOMS_COUNT;
  setLayerClass("bottoms", "bottoms", state.bottoms);
  updateBottomsCarousel();
}

/* ---------- SHOES ---------- */

function getShoesIndex(current, offset) {
  return ((current - 1 + offset + SHOES_COUNT) % SHOES_COUNT) + 1;
}

function setShoesPreview(imgId, index) {
  const img = document.getElementById(imgId);
  if (img) img.src = `./images4/shoes${index}.png`;
}

function updateShoesCarousel() {
  setShoesPreview("shoesPrevImg", getShoesIndex(state.shoes, -1));
  setShoesPreview("shoesCurrentImg", state.shoes);
  setShoesPreview("shoesNextImg", getShoesIndex(state.shoes, 1));
}

function nextshoes() {
  state.shoes = nextValue(state.shoes, SHOES_COUNT);
  setLayerClass("shoes", "shoes", state.shoes);
  updateShoesCarousel();
}

function prevshoes() {
  state.shoes = state.shoes > 1 ? state.shoes - 1 : SHOES_COUNT;
  setLayerClass("shoes", "shoes", state.shoes);
  updateShoesCarousel();
}

/* ---------- BANGS ---------- */

function getBangsIndex(current, offset) {
  return ((current - 1 + offset + BANGS_COUNT) % BANGS_COUNT) + 1;
}

function setBangsPreview(imgId, index) {
  const img = document.getElementById(imgId);
  if (img) img.src = `./images4/bangs${index}.png`;
}

function updateBangsCarousel() {
  setBangsPreview("bangsFarPrevImg", getBangsIndex(state.bangs, -2));
  setBangsPreview("bangsPrevImg", getBangsIndex(state.bangs, -1));
  setBangsPreview("bangsCurrentImg", state.bangs);
  setBangsPreview("bangsNextImg", getBangsIndex(state.bangs, 1));
  setBangsPreview("bangsFarNextImg", getBangsIndex(state.bangs, 2));
}

function nextbangs() {
  state.bangs = nextValue(state.bangs, BANGS_COUNT);
  setLayerClass("bangs", "bangs", state.bangs);
  updateBangsCarousel();
}

function prevbangs() {
  state.bangs = state.bangs > 1 ? state.bangs - 1 : BANGS_COUNT;
  setLayerClass("bangs", "bangs", state.bangs);
  updateBangsCarousel();
}

/* ---------- HAIR ---------- */

function getHairIndex(current, offset) {
  return ((current - 1 + offset + HAIR_COUNT) % HAIR_COUNT) + 1;
}

function setHairPreview(imgId, index) {
  const img = document.getElementById(imgId);
  if (img) img.src = `./images4/${HAIR_IMAGE_FILES[index - 1]}`;
}

function updateHairCarousel() {
  setHairPreview("hairFarPrevImg", getHairIndex(state.hair, -2));
  setHairPreview("hairPrevImg", getHairIndex(state.hair, -1));
  setHairPreview("hairCurrentImg", state.hair);
  setHairPreview("hairNextImg", getHairIndex(state.hair, 1));
  setHairPreview("hairFarNextImg", getHairIndex(state.hair, 2));
}

function nexthair() {
  state.hair = nextValue(state.hair, HAIR_COUNT);
  setHairLayerClass();
  updateHairCarousel();
}

function prevhair() {
  state.hair = state.hair > 1 ? state.hair - 1 : HAIR_COUNT;
  setHairLayerClass();
  updateHairCarousel();
}

/* ---------- SHIRT ---------- */

function getShirtIndex(current, offset) {
  return ((current - 1 + offset + SHIRT_COUNT) % SHIRT_COUNT) + 1;
}

function setShirtPreview(imgId, index) {
  const img = document.getElementById(imgId);
  if (img) img.src = `./images4/${SHIRT_IMAGE_FILES[index - 1]}`;
}

function updateShirtCarousel() {
  setShirtPreview("shirtFarPrevImg", getShirtIndex(state.shirt, -2));
  setShirtPreview("shirtPrevImg", getShirtIndex(state.shirt, -1));
  setShirtPreview("shirtCurrentImg", state.shirt);
  setShirtPreview("shirtNextImg", getShirtIndex(state.shirt, 1));
  setShirtPreview("shirtFarNextImg", getShirtIndex(state.shirt, 2));
}

function nextshirt() {
  state.shirt = nextValue(state.shirt, SHIRT_COUNT);
  setLayerClass("shirt", "shirt", state.shirt);
  updateShirtCarousel();
}

function prevshirt() {
  state.shirt = state.shirt > 1 ? state.shirt - 1 : SHIRT_COUNT;
  setLayerClass("shirt", "shirt", state.shirt);
  updateShirtCarousel();
}

/* ---------- FACE ---------- */

function setface(number) {
  if (number < 1 || number > FACE_COUNT) return;
  state.face = number;
  setLayerClass("face", "face", number);
  updateFaceButtons();
}

function updateFaceButtons() {
  const buttons = document.querySelectorAll(".faceBtn");

  buttons.forEach((button, index) => {
    if (index + 1 === state.face) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

/* ---------- SKIN ---------- */

function setskin(number) {
  state.skin = number;
  setLayerClass("skin", "skin", number);
  updateSkinButtons();
}

function updateSkinButtons() {
  const buttons = document.querySelectorAll(".skinBtn");

  buttons.forEach((button, index) => {
    if (index + 1 === state.skin) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

/* ---------- MUSIC ---------- */

let isPlaying = false;

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const icon = document.getElementById("recordIcon");

  if (!music) return;

  if (!music.src) {
    music.src = playlist[currentTrack];
  }

  if (isPlaying) {
    music.pause(); // pauses EXACT spot
    icon.src = "./images4/recordmute.png";
    isPlaying = false;
  } else {
    music.play(); // resumes where it left off
    icon.src = "./images4/recordspinning.gif";
    isPlaying = true;
  }
}
