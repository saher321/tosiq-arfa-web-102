import calculations2Lib

number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))
operator = input("Enter the operator (+, -, *, /): ")

if operator == "+":
  calculations2Lib.add(number1, number2)
elif operator == "-":
  calculations2Lib.difference(number1, number2)
elif operator == "/":
  calculations2Lib.divide(number1, number2)
elif operator == "*":
  calculations2Lib.product(number1, number2)
else:
  print("Invalid operator. Please use +, -, *, or /.")