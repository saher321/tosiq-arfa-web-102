def addUser(users, name, email, passw):
  userData = { "name": name, "email": email, "passw": passw }
  users.append(userData)
  return users
