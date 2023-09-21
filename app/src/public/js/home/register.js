"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (!name.value) return alert("이름을 입력해주십시오.");
  if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");


  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };

  // fetch로 프론트에서 서버로 데이터 보내기. 첫번째 파라미터로 어떠한 경로로 데이터를 보낼지 결정. 로그인이라는 경로로 보낸다고 가정. 두번째 파라미터로 어떠한 데이터를 보낼지 정할 수 있다. 바디를 통해서 데이터를 전달 가능. 이 때 메서드도 전달해야 한다.
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        // 이동할 링크를 지정한다.
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      // 빨간색 에러 메시지 띄우게 구현
      console.error(new Error("회원가입 중 에러 발생"));
    });
};