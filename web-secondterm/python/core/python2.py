import os
from functools import reduce
import python2module

categories = [ "Men", "Men", "Women", "Kids" ]

# print(len(list1))

# for cat in categories:
#     if cat == "Men":
#         pass
#     else:
#         print(cat)

# map() > returns a new array
# filter() > returns an updated  array
# reduce() > print single value

newCat = list(map(lambda cat: cat, categories))
# print(newCat)

updatedCat = list(filter(lambda item: item == "Men", categories))
# print(updatedCat)

sales = [2300, 30444, 345, 9000]

total = reduce(lambda item, sum: item+sum, sales, 0)
# print(total)

# FILING
# mode: r, w, a :: rb, wb, ab
# filename = "python2.txt"

# if not os.path.exists(filename):
#     print(f"File not found!")
# else:
#     myfile1 = open(filename, "w")
#     myfile1.write("Some content in this page")
#     myfile1.close()

# ******* ARRAY *******

my_list =[23, 56, 34, 21, 45, 67, 12]
# my_list.append(90)
# my_list.insert(0, 90)
# my_list.remove(56)
# itemCount = len(my_list)
# my_list.sort()
# my_list.pop()
# my_list.reverse()
# print(itemCount)
# print(my_list)
# for item in my_list:
#    print(item)
# number = int(input("Enter a number: "))
# my_list = []
# my_list.append(number)
# print(my_list)


# ******* DECORATORS ********

# def decor(func):
#     def innerFunc():
#         func()
#         print("Thank you have a good day.")
#     return innerFunc()


# @decor
# def greet():
#     user = "Suneel"
#     print(f"Welcome back, {user}!")


total = python2module.sum(3,4)
print(total)