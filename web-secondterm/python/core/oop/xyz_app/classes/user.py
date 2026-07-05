class User:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name
    def set_name(self, name):
        self.name = name

user = User("Hassan")
print("User name:", user.get_name())
user.set_name("Usman")
user_name = user.get_name()
print("User name:", user_name)
