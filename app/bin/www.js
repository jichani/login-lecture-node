"use strict";

// bin 폴더는 일반적으로 애플리케이션의 시작점을 정의하는 스크립트를 포함.

const app = require("../app");
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});