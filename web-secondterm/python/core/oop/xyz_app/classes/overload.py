# def sum (a,b):
#     print(a+b)
# def sum (a,b,c=0):
#     print(a+b+c)
# def sum (a,b,c=0,d=0):
#     print(a+b+c+d)
# sum(2,4)

class MyMath:
    def sum(self, a,b): # not callable
        print(a+b)

    def sum(self, a,b,c): # error
        print(a+b+c)
    
    def total(self, *args): # done
        s = 0
        for ar in args:
            s = s + ar
        print(s)


myMath = MyMath()
myMath.total(2,43)
# myMath.sum(2,3)
# numbrs = myMath.total(2,1)
# s = 0
# for n in numbrs:
#     s = s + n

# print(s)