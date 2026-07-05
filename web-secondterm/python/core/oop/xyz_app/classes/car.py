class Car: # parent class
    # def __init__(self, make, year):
    #     self.make = make
    #     self.year = year
    def start(slef, carname):
        print(f"{carname} is started")

class ElectricCar(Car): # child class
    pass

# car = Car("Honda", 1997)
# print(car.make, car.year)

# eCar = ElectricCar("Toyota", 2026)
# print(eCar.make, eCar.year)

eCar = ElectricCar()
print(eCar.start("BMW"))

