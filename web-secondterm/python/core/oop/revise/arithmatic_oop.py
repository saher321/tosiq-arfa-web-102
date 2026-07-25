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
    def pow(self, a, n):
        for i in range(1, n):
            a = a*a

        return a

