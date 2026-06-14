# DATA TYPES

# int => 212,4343,
# float => 34.2

# str => "Welcome in tho the python lec"

# list => ["Purple", "Black", "White"]
dictionary = {
    "name" :  "Lahore",
    "country" : "Pakistan"
}

print(dictionary['country'])
list_of_dictionaries = [
   { "id" : 1, "color" : "purple" },
   { "id" : 2, "color" : "white" },
   { "id" : 3, "color" : "black" },
   { "id" : 4, "color" : "orange" },
]
print("List of dictionary: ", list_of_dictionaries)
# tuple => (1,3,4,6,5,6) => immutable :: non changeable
tupledata   = (1,3,4,6,5,6)
print("Tuple: ", tupledata)

setdata     = { 1,3,4,6,5,6 }
print("Set: ", setdata)
# set => { 1,3,4,6,5,6 } => mutable :: changeable
name    = "Ali"
age     = 34
status  = True
x       = 3.4

# print("Welcome to the Python", name, age)
# print('\n', type(name))
# print('\n', type(age))
# print('\n', type(status))
# print('\n', type(x))

# cel = float(input("Enter celsius value: "))
# fahr = (cel * 9/5) + 32
# print("Fahrenheit value is: ", fahr)

# Problem: Take marks of 5 subjects one by one
# and print its sum & average
# total marks: 500