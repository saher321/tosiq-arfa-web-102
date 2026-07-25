
class Student:
    name = "Usama"
    def __init__(self, age):
        self.age = age
        # print("Contstructor is called")

    def getData(self):
        print(f"Student name is {self.name}, age is {self.age}")

s1 = Student(23)
s1.name = "John samith"
print(s1.getData())