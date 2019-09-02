function User(id, username, password, name) {
  this.id  = id;
  this.username  = username;
  this.password  = password;
  this.name = name || username;
}

module.exports = User