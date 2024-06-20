//Buttons dress
let btn_dress = document.getElementById("btn_dress");

btn_dress.addEventListener("click", cambioDress);

let current_dress = 1;
function cambioDress() {
  let img_dress = document.getElementById("img_dress");
  current_dress += 1;
  if (current_dress == 7) {
    current_dress = 1;
  }
  img_dress.src = `./IMAGES/DRESS_${current_dress}.png`;
}

//Buttons hair
let btn_hair = document.getElementById("btn_hair");

btn_hair.addEventListener("click", cambioHair);

let current_hair = 1;
function cambioHair() {
  let img_hair = document.getElementById("img_hair");
  current_hair += 1;
  if (current_hair == 3) {
    current_hair = 1;
  }
  img_hair.src = `./IMAGES/HAIR_${current_hair}.png`;
}

//Buttons eyes
let btn_eyes = document.getElementById("btn_eyes");

btn_eyes.addEventListener("click", cambioEyes);

let current_eyes = 1;
function cambioEyes() {
  let img_eyes = document.getElementById("img_eyes");
  current_eyes += 1;
  if (current_eyes == 3) {
    current_eyes = 1;
  }
  img_eyes.src = `./IMAGES/EYES_${current_eyes}.png`;
}
