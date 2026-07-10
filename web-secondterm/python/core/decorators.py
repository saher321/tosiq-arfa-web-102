# Youtube video url: https://www.youtube.com/watch?v=zgUxviAqrLU
def dec(func):
    def innerFunc(n):
        print("Welcome")
        func(n)
        print("Thank you!")
    return innerFunc

@dec
def userInfo(username):
    print(f"User name is {username}")

username = "akme242"
userInfo(username)

@dec
def hello(name):
    print(f"Hello from simple method , {name}")

name = "Ali"
hello(name)