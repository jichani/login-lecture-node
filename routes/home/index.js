"use strict";
//이크마 스크립트 문법을 준수하겠다는 표현 사용!

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/index");
})

router.get("/login", (req, res) => {
  res.render("home/login");
})

// 라우터를 사용할 수 있도록 외부로 던져준다.
module.exports = router;