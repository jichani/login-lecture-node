"use strict";

const fs = require("fs").promises;

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

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }



  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
};

module.exports = UserStorage;