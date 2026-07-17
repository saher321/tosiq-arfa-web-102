# map(): array, return new updatedArray
# filter(): array, return updatedValues
# reduce(): array, returns a single value
from functools import reduce

numbers = [1, 2, 3, 4, 5] # 15 in sum

# array.map((elem) => { elem*2 })
updatedNumbers = list(map(lambda x: x * 2, numbers))
# print(updatedNumbers)

filteredArr = list(filter(lambda x: x%2 == 1, numbers))
# print(filteredArr)

# arr.reduce((sum, x) => sum+x) # 15
total = reduce(lambda x, sum: sum+x, numbers)

print(f"sum of numbers: {total}")


# input: sales = [
# {month: "Jan", profit: 45000},
# {month: "Feb", profit: 5000},
# {month: "Mar", profit: 7000},
# {month: "April", profit: 35000},
# ]

# output: 
# Profit of 12 month sales is: 60000
