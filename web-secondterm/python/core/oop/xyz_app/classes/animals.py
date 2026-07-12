class Animals:
    def voice(self):
        print("Animals voices")

class Dog(Animals):
    def voice(self):
        print("Dog is bark")

class Cat(Animals):
    def voice(self):
        print("Cat says meow")

vs = [Animals(), Dog(), Cat()]

for v in vs:
    v.voice()

