"use strict";

// bin 폴더는 일반적으로 애플리케이션의 시작점을 정의하는 스크립트를 포함.

const app = require("../app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});