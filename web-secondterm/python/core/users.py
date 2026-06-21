
# students = []
# while True:
#   name = str(input("Enter Student name: "))
#   students.append(name)
#   option = str(input("Continue (y/n)? "))
#   if option == "n":
#     break

# print(students)

print("****** Add Users ******")
users = []
while True:
  name  = str(input("Enter user name: "))
  email = str(input("Enter user email: "))
  passw = str(input("Enter user passw: "))

  userData = { "name": name, "email": email, "passw": passw }
  users.append(userData)

  option = str(input("Continue (y/n)? "))
  if option == "n":
    break


print("****** User List ******")
print(users)


# output
# User 1
# Name: Gulfam
# Email: gul@email.com
# Passw: gul123
#
# User 2
