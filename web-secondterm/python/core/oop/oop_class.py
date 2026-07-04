
class User:
  email = "my_email@gmail.com"
  password = "1234"

  def __init__(self, email, password):
    self.email = email
    self.password = password
    

  def details(self, role):
    print(f"User email: {self.email}, User password: {self.password}, User role: {role}")

user1 = User("updatedemail@gmail.com", "updateduser786")
# user2 = User()
user1.details("HR")
# user1.email = "secondemail@gmail.com"
# user1.password = "123456"

# user2.email = "user2@gmail.com"
# user2.password = "user2_1234"
# user2.details()

