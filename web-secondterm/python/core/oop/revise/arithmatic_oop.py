class Arithmatic:
    def sum(self, a,b):
        return a+b
    
    def divide(self, a,b):
        if b == 0:
            return "Cannot divide by zero"
        else:
            return a/b
    
    def multiply(self, a,b):
        return a*b
    
    def subtract(self, a,b):
        return a-b

class Math:
    def pow(self, base, expo):
        result = 1
        for i in range(expo):
            result = result * base

        return result