// const colorGreen = ["#c8e6c9", "#97b498"];
// const colorPink = ["#ffebee", "#ccb9bc"];
// const colorPurple = ["#ede7f6", "#bbb5c3"];
// const colorBlue = ["#e3f2fd", "#b1bfca"];
// const colorTeal = ["#e0f2f1","#aebfbe"];
// const colorGrey = ["#f5f5f5","#c2c2c2"];
// const colorBrown = ["#d7ccc8", "#a69b97"];

// const colorPalette = [
//   colorGreen, 
//   colorPink, 
//   colorPurple, 
//   colorBlue, 
//   colorTeal, 
//   colorGrey,
//   colorBrown
// ];

const back = [
  "src/img/1.jpg",
  "src/img/2.jpg"
]
const colorChangeBtun = document.querySelector(".colorChangeBtn");

function randomColor() {
  const ran = back[Math.round(Math.random()*(back.length-1))];
  
  console.log(ran);
  document.body.style.backgroundImage = "url('" + ran + "')";
  document.body.style.backgroundSize = "contain";
}

colorChangeBtun.addEventListener("click", randomColor);
