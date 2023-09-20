"use strict";

class UserStorage {
  // # 표시로 private하게 만든다.
  static #users = {
    id: ["woorimIT", "나는준현이당", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["우리밋", "준현", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]으로 만들어진다.
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
};

module.exports = UserStorage;