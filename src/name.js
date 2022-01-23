// 1. 이름을 입력받는다.
// 2. 입력받은 이름을 localStorage에 저장한다.
// 3. 이미 입력받은 이름이 있다면 로그인폼을 보여주지않는다.
// 4. localStorage에 저장된 이름으로 인사한다.



const loginForm = document.querySelector(".loginForm");
const submitBtn = loginForm.querySelector("button");
const inputUserName = document.querySelector(".inputName")
const nameForm = document.querySelector(".name");

function onSubmitBtn(event) {
  event.preventDefault();
  const userName = inputUserName.value;
  console.log(userName);
  if (userName === '') {
    alert("이름을 입력하세요!");
    return;
  } else {
    localStorage.setItem("name", userName);
    greetingName(userName);
  }
}

function greetingName(userName) {
  loginForm.style.display = "none";
  nameForm.insertAdjacentHTML('afterbegin', 
  `<p>${userName}의 할일</p>`);
}

const savedUserName = localStorage.getItem("name");
if(savedUserName === null) {
  loginForm.addEventListener("submit", onSubmitBtn);
  console.log("1");
} else {
  greetingName(savedUserName);
}