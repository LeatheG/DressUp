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

function getBottomsIndex(current, offset) {
  let index = current + offset;

  while (index < 1) {
    index += BOTTOMS_COUNT;
  }

  while (index > BOTTOMS_COUNT) {
    index -= BOTTOMS_COUNT;
  }

  return index;
}

function setBottomsPreview(imgId, nameId, index) {
  const img = document.getElementById(imgId);
  const name = document.getElementById(nameId);

  if (!img || !name) {
    return;
  }

  img.src = `./images4/bottoms${index}.png`;
  name.textContent = `Bottoms ${index}`;
}

function updateBottomsCarousel() {
  const farPrev = getBottomsIndex(state.bottoms, -2);
  const prev = getBottomsIndex(state.bottoms, -1);
  const current = state.bottoms;
  const next = getBottomsIndex(state.bottoms, 1);
  const farNext = getBottomsIndex(state.bottoms, 2);

  setBottomsPreview("bottomsFarPrevImg", "bottomsFarPrevName", farPrev);
  setBottomsPreview("bottomsPrevImg", "bottomsPrevName", prev);
  setBottomsPreview("bottomsCurrentImg", "bottomsCurrentName", current);
  setBottomsPreview("bottomsNextImg", "bottomsNextName", next);
  setBottomsPreview("bottomsFarNextImg", "bottomsFarNextName", farNext);
}

function nextbottoms() {
  if (state.bottoms < BOTTOMS_COUNT) {
    state.bottoms++;
  } else {
    state.bottoms = 1;
  }

  document.querySelector("#bottoms")
    .setAttribute("class", `bottoms${state.bottoms}`);

  updateBottomsCarousel();
}

function prevbottoms() {
  if (state.bottoms > 1) {
    state.bottoms--;
  } else {
    state.bottoms = BOTTOMS_COUNT;
  }

  document.querySelector("#bottoms")
    .setAttribute("class", `bottoms${state.bottoms}`);

  updateBottomsCarousel();
}

/* ---------- SHOES ---------- */

function getShoesIndex(current, offset) {
  let index = current + offset;

  while (index < 1) {
    index += SHOES_COUNT;
  }

  while (index > SHOES_COUNT) {
    index -= SHOES_COUNT;
  }

  return index;
}

function setShoesPreview(imgId, nameId, index) {
  const img = document.getElementById(imgId);
  const name = document.getElementById(nameId);

  if (!img || !name) return;

  img.src = `./images4/shoes${index}.png`;
  name.textContent = `Shoes ${index}`;
}

function updateShoesCarousel() {
  const prev = getShoesIndex(state.shoes, -1);
  const current = state.shoes;
  const next = getShoesIndex(state.shoes, 1);

  setShoesPreview("shoesPrevImg", "shoesPrevName", prev);
  setShoesPreview("shoesCurrentImg", "shoesCurrentName", current);
  setShoesPreview("shoesNextImg", "shoesNextName", next);
}

function nextshoes() {
  if (state.shoes < SHOES_COUNT) {
    state.shoes++;
  } else {
    state.shoes = 1;
  }

  document.querySelector("#shoes")
    .setAttribute("class", `shoes${state.shoes}`);

  updateShoesCarousel();
}

function prevshoes() {
  if (state.shoes > 1) {
    state.shoes--;
  } else {
    state.shoes = SHOES_COUNT;
  }

  document.querySelector("#shoes")
    .setAttribute("class", `shoes${state.shoes}`);

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

function getBangsIndex(current, offset) {
  let index = current + offset;

  while (index < 1) {
    index += BANGS_COUNT;
  }

  while (index > BANGS_COUNT) {
    index -= BANGS_COUNT;
  }

  return index;
}

function setBangsPreview(imgId, nameId, index) {
  const img = document.getElementById(imgId);
  const name = document.getElementById(nameId);

  if (!img || !name) return;

  img.src = `./images4/bangs${index}.png`;
  name.textContent = `Bangs ${index}`;
}

function updateBangsCarousel() {
  const prev = getBangsIndex(state.bangs, -1);
  const current = state.bangs;
  const next = getBangsIndex(state.bangs, 1);

  setBangsPreview("bangsPrevImg", "bangsPrevName", prev);
  setBangsPreview("bangsCurrentImg", "bangsCurrentName", current);
  setBangsPreview("bangsNextImg", "bangsNextName", next);
}

function nextbangs() {
  if (state.bangs < BANGS_COUNT) {
    state.bangs++;
  } else {
    state.bangs = 1;
  }

  document.querySelector("#bangs")
    .setAttribute("class", `bangs${state.bangs}`);

  updateBangsCarousel();
}

function prevbangs() {
  if (state.bangs > 1) {
    state.bangs--;
  } else {
    state.bangs = BANGS_COUNT;
  }

  document.querySelector("#bangs")
    .setAttribute("class", `bangs${state.bangs}`);

  updateBangsCarousel();
}

/* ---------- HAIR ---------- */

function updateHairCarousel() {
  const farPrev = getHairIndex(state.hair, -2);
  const prev = getHairIndex(state.hair, -1);
  const current = state.hair;
  const next = getHairIndex(state.hair, 1);
  const farNext = getHairIndex(state.hair, 2);

  setHairPreview("hairFarPrevImg", "hairFarPrevName", farPrev);
  setHairPreview("hairPrevImg", "hairPrevName", prev);
  setHairPreview("hairCurrentImg", "hairCurrentName", current);
  setHairPreview("hairNextImg", "hairNextName", next);
  setHairPreview("hairFarNextImg", "hairFarNextName", farNext);
}

function prevhair() {
  if (state.hair > 1) {
    state.hair--;
  } else {
    state.hair = HAIR_COUNT;
  }

  document.querySelector("#hair")
    .setAttribute("class", `hair${state.hair - 1}`);

  updateHairCarousel();
}

function nexthair() {
  if (state.hair < HAIR_COUNT) {
    state.hair++;
  } else {
    state.hair = 1;
  }

  document.querySelector("#hair")
    .setAttribute("class", `hair${state.hair - 1}`);

  updateHairCarousel();
}

function getHairIndex(current, offset) {
  let index = current + offset;

  if (index < 1) index += HAIR_COUNT;
  if (index > HAIR_COUNT) index -= HAIR_COUNT;

  return index;
}

function setHairPreview(imgId, nameId, index) {
  const img = document.getElementById(imgId);
  const name = document.getElementById(nameId);

  img.src = `./images4/hair${index - 1}.png`; // ← FIX
  name.textContent = `Hair ${index}`;
}

/* ---------- SHIRT ---------- */

function getShirtIndex(current, offset) {
  let index = current + offset;

  while (index < 1) {
    index += SHIRT_COUNT;
  }

  while (index > SHIRT_COUNT) {
    index -= SHIRT_COUNT;
  }

  return index;
}

function setShirtPreview(imgId, nameId, index) {
  const img = document.getElementById(imgId);
  const name = document.getElementById(nameId);

  if (!img || !name) {
    return;
  }

  img.src = `./images4/shirt${index}.png`;
  name.textContent = `Shirt ${index}`;
}

function updateShirtCarousel() {
  const prev = getShirtIndex(state.shirt, -1);
  const current = state.shirt;
  const next = getShirtIndex(state.shirt, 1);
  const next2 = getShirtIndex(state.shirt, 2);

  setShirtPreview("shirtPrevImg", "shirtPrevName", prev);
  setShirtPreview("shirtCurrentImg", "shirtCurrentName", current);
  setShirtPreview("shirtNextImg", "shirtNextName", next);
  setShirtPreview("shirtNext2Img", "shirtNext2Name", next2);
}

function nextshirt() {
  if (state.shirt < SHIRT_COUNT) {
    state.shirt++;
  } else {
    state.shirt = 1;
  }

  document.querySelector("#shirt").setAttribute("class", `shirt${state.shirt}`);
  updateShirtCarousel();
}

function prevshirt() {
  if (state.shirt > 1) {
    state.shirt--;
  } else {
    state.shirt = SHIRT_COUNT;
  }

  document.querySelector("#shirt").setAttribute("class", `shirt${state.shirt}`);
  updateShirtCarousel();
}

/* ---------- FACE ---------- */

function getOtherFace(current) {
  return current === 1 ? 2 : 1;
}

function setFacePreview(imgId, nameId, index) {
  const img = document.getElementById(imgId);
  const name = document.getElementById(nameId);

  img.src = `./images4/face${index}.png`;
  name.textContent = `Face ${index}`;
}

function updateFaceCarousel() {
  const current = state.face;
  const other = getOtherFace(current);

  setFacePreview("faceCurrentImg", "faceCurrentName", current);
  setFacePreview("faceOtherImg", "faceOtherName", other);
}

function nextface() {
  if (state.face < FACE_COUNT) {
    state.face++;
  } else {
    state.face = 1;
  }

  document.querySelector("#face")
    .setAttribute("class", `face${state.face}`);

  updateFaceCarousel();
}

function prevface() {
  if (state.face > 1) {
    state.face--;
  } else {
    state.face = FACE_COUNT;
  }

  document.querySelector("#face")
    .setAttribute("class", `face${state.face}`);

  updateFaceCarousel();
}