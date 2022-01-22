const clock = document.querySelector(".clock");
const yearday = document.querySelector(".yearday");

function getClock() {
  const date = new Date();
  
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const yoil = date.getDay();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  const yoilList = ["일", "월", "화", "수", "목", "금", "토"];
  yearday.innerText =`${year}년 ${month+1}월 ${day}일 ${yoilList[yoil]}요일`
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);