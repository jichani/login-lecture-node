const fs = require("fs");
const appRoot = require("app-root-path");

// "append" 모드로 작동하는 쓰기 스트림을 생성.
var accessLogStream = fs.createWriteStream(
  `${appRoot}/log/access.log`,
  { flags: 'a' })

module.exports = accessLogStream;