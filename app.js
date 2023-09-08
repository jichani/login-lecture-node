"use strict";
//이크마 스크립트 문법을 준수하겠다는 표현 사용!

// http로 서버 띄워보기. http는 내장 모듈. 불편한 점이 많아서 express를 사용함.

// 모듈. express로 서버 띄워보기. npm i express로 설치함
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅. 경로를 설정해주어야 가져올 수 있다. index.js를 가져온다.
const home = require("./routes/home");

// 앱 세팅. 기본 경로를 설정하는 코드
app.set("views", "./views");
// 어떤 파일을 볼 것인지를 설정하는 코드
app.set("view engine", "ejs");


// use -> 미들 웨어를 등록해주는 메서드
app.use("/", home);

app.listen(PORT, function () {
  console.log("서버 가동");
})