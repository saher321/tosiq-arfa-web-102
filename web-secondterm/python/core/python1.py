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

password = input("Enter any password: ")

if not password:
    print("Please provide password!")
else:
    if len(password) > 4:
        print(f"You entered this pass: {password}")
    else:
        print("Password is too short")