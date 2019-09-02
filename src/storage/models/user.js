function User(id, username, password, name) {
  this.id  = username;
  this.username  = username;
  this.password  = password;
  this.name = name || username;
}

module.exports = User