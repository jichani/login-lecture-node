// http로 서버 띄워보기. http는 내장 모듈. 불편한 점이 많아서 express를 사용함.

// express로 서버 띄워보기. npm i express로 설치함
const express = require("express");
const app = express();

// 앱 세팅. 기본 경로를 설정하는 코드
app.set("views", "./views");
// 어떤 파일을 볼 것인지를 설정하는 코드
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home/index");
})

app.get("/login", (req, res) => {
  res.render("home/login");
})

app.listen(3000, function () {
  console.log("서버 가동");
})