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
# list of dictionaries => [
#    { "id" : 1, "color" : "purple" },
#    {},
#    {},
#    {},
# ]

# tuple => (1,3,4,6,5,6) => immutable :: non changeable
# set => { 1,3,4,6,5,6 } => mutable :: changeable
name    = "Ali"
age     = 34
status  = True
x       = 3.4

print("Welcome to the Python", name, age)
print('\n', type(name))
print('\n', type(age))
print('\n', type(status))
print('\n', type(x))

cel = float(input("Enter celsius value: "))
fahr = (cel * 9/5) + 32
print("Fahrenheit value is: ", fahr)