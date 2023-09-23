"use strict";

const db = require("../config/db");

class UserStorage {
  // # 표시로 private하게 만든다.
  // static #users = {
  //   id: ["woorimIT", "나는준현이당", "김팀장"],
  //   psword: ["1234", "1234", "123456"],
  //   name: ["우리밋", "준현", "김팀장"],
  // };

  // 프라이빗한 메서드는 항상 최상단에 올려주어야한다.
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]으로 만들어진다.
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
  }

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      })
    })
  }
  // 4:!5

  static async save(userInfo) {
  }
};

module.exports = UserStorage;