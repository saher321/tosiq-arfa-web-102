class User:
    name = "Usman"
    age = 44

    def __init__(self, name, age): # constructor
        # print("Hello from construtor")
        self.name = name
        self.age = age
        # print(f"My name is {self.name} and my age is {self.age}")

    def information(self):
        print(f"My name is {self.name} and my age is {self.age}")

u1 = User("Alexa", 44)
u2 = User("Spiderman", 77)
u3 = User("John snow", 34)
u4 = User("Thor", 1999)

# print(f"My name is {u.name} and my age is {u.age}")
u1.information()
u2.information()
u3.information()
u4.information()