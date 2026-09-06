from django.db import models

# Create your models here.
class Customers(models.Model):
    full_name = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=40)
    address = models.CharField(max_length=200)

    def __str__(self):
        return self.full_name