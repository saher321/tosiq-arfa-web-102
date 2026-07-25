class Animals:
    def sound(self):
        print("Animals sound is so loud")

    def age(self):
        print("Animal age is 50")

class Cat(Animals):
    def sound(self):
        print("Cat says Meow")

class Dog(Animals):
    def sound(self):
        print("Dog says woof")

a = Animals()
# print(a.sound())

c = Cat()
# print(c.sound())

d = Dog()
# print(d.sound())
print(f"Animal age is {d.age()}")