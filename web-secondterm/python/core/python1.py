nmbr = 1
name = "Sam"
isUser = True
# print(nmbr, name, isUser)

dictionary = {
    "id": 123,
    "category": "Clothing"
}

# print(dictionary["category"])


li = ["Alex", 123, 3.4, "W"]
# print(li)
# print(li[0])

# immutable
tu = (1,2,3,4,4,5) 

# mutable
se = {1,2,3,4,4,5}
# print(f"Tuple value {tu} \n Set value {se}")

cars = [
    {"carID": 123, "name": "Toyota"},
    {"carID": 3, "name": "BMW"},
    {"carID": 23, "name": "Audi"},
]

# print(cars)

# *********** BASIC **********

fah = 193
cel = ( fah - 32 ) * 5/9

# print(cel)

# error handling technique
# try:
#     cel = int(input("Enter value in celsius: "))

#     fah = ( cel * 9/5 ) + 32

#     print(fah)
# except: 
#     print("Error in input")


# ****** IF ELIF ********

# password = input("Enter any password: ")

# if not password:
#     print("Please provide password!")
# else:
#     if len(password) > 4:
#         print(f"You entered this pass: {password}")
#     else:
#         print("Password is too short")

# ***** MATCH ******

# print("1- Add data")
# print("2- Delete data")
# print("3- Update data")
# print("4- Read data")

# choice_no = int(input("Enter number 1-4: "))
# choice_no = 0
# match choice_no:
#     case 1:
#         print("Data has been added successfully!")
#     case 2:
#         print("Data has been deleted successfully!")
#     case 3:
#         print("Data has been updated successfully!")
#     case 4:
#         print("Records found successful!")
#     case _:
#         print("Invalid entry")

# ******** LOOPS *******

# tbl_no = int(input("Enter number to print its table: "))
# limit = int(input("Table limit: "))
# for i in range(1, limit+1):
    # print(f"{tbl_no} x {i} = {tbl_no*i}")
    # pass
# li = [ 23, 46, 8, 956, 22, 10 ]
# sum = 0
# for item in li:
#     if item % 2 == 0:
#         sum = sum+item
# print(f"Sum is: {sum}")

# i = 1
# while i <= 10:
#     print(i)
#     i += 1

password = ""
while password != "pass123":
    password = input("Enter your password: ")

print("Access granted")
