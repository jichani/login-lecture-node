"use strict";
//이크마 스크립트 문법을 준수하겠다는 표현 사용!

const express = require("express");
const router = express.Router();

// 불러오기
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home)
router.get("/login", ctrl.output.login)

router.post("/login", ctrl.process.login)

// 라우터를 사용할 수 있도록 외부로 던져준다.
module.exports = router;