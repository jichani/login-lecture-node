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
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static async save(userInfo) {
    // "id", "psword", "name" 모든 데이터를 가져오고 싶을 때 true를 적으면 된다.
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    return { success: true }
    // 데이터 추가
  }
};

module.exports = UserStorage;