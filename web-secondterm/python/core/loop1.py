# for (var i=1; i< 11; i++)
sum = 0
for i in range(1, 11):
  if i % 2 == 0:
    sum = sum + i

print(f"Sum of even values is: {sum}")