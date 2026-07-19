import os
from functools import reduce

categories = [ "Men", "Men", "Women", "Kids" ]

# print(len(list1))

# for cat in categories:
#     if cat == "Men":
#         pass
#     else:
#         print(cat)

# map() > returns a new array
# filter() > returns an updated array
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
filename = "python2.txt"

if not os.path.exists(filename):
    print(f"File not found!")
else:
    myfile1 = open(filename, "w")
    myfile1.write("Some content in this page")
    myfile1.close()