"use strict";
//이크마 스크립트 문법을 준수하겠다는 표현 사용!

// http로 서버 띄워보기. http는 내장 모듈. 불편한 점이 많아서 express를 사용함.

// 모듈. express로 서버 띄워보기. npm i express로 설치함
const express = require("express");
const app = express();

// 라우팅. 경로를 설정해주어야 가져올 수 있다. index.js를 가져온다.
const home = require("./src/routes/home");

// 앱 세팅. 기본 경로를 설정하는 코드
app.set("views", "./src/views");
// 어떤 파일을 볼 것인지를 설정하는 코드
app.set("view engine", "ejs");
// 현재 디렉토리를 찾는 __dirname. 현재 파일인 app.js의 현재 위치에서 src폴더의 public폴더를 정적 경로로 설정한다.
app.use(express.static(`${__dirname}/src/public`));

// use -> 미들 웨어를 등록해주는 메서드
app.use("/", home);

module.exports = app;