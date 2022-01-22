const colorGreen = ["#c8e6c9", "#97b498"];
const colorPink = ["#ffebee", "#ccb9bc"];
const colorPurple = ["#ede7f6", "#bbb5c3"];
const colorBlue = ["#e3f2fd", "#b1bfca"];
const colorTeal = ["#e0f2f1","#aebfbe"];
const colorGrey = ["#f5f5f5","#c2c2c2"];
const colorBrown = ["#d7ccc8", "#a69b97"];

const colorPalette = [
  colorGreen, 
  colorPink, 
  colorPurple, 
  colorBlue, 
  colorTeal, 
  colorGrey,
  colorBrown
];

const colorChangeBtun = document.querySelector(".colorChangeBtn");

function randomColor() {
  const ran = Math.round(Math.random()*(colorPalette.length-1));
  const randomColor = colorPalette[ran];
  console.log(ran);
  document.documentElement.style.setProperty("--basic-color", randomColor[0]);
  document.documentElement.style.setProperty("--point-color", randomColor[1]);
}

colorChangeBtun.addEventListener("click", randomColor);
