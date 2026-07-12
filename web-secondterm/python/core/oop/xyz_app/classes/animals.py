# 12 jule, 2026: YT URL: https://www.youtube.com/watch?v=JNHY9DRg4pk

from abc import ABC, abstractmethod
class Animals:
    def voice(self):
        print("Animals voices")
    
    @abstractmethod
    def sound(self):
        pass

class Dog(Animals):
    def voice(self):
        print("Dog is bark")

class Cat(Animals):
    def voice(self):
        print("Cat says meow")

vs = [Animals(), Dog(), Cat()]

for v in vs:
    v.voice()

