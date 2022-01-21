// 1. 이름을 입력받는다.
// 2. 입력받은 이름을 localStorage에 저장한다.
// 3. 이미 입력받은 이름이 있다면 로그인폼을 보여주지않는다.
// 4. localStorage에 저장된 이름으로 인사한다.



const loginForm = document.querySelector(".login-form");
const submitBtn = document.querySelector(".submit");
const inputUserName = document.querySelector(".inputName")
const nameForm = document.querySelector(".name");

function onSubmitBtn(event) {
  event.preventDefault();
  const userName = inputUserName.value;
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
} else {
  greetingName(savedUserName);
}