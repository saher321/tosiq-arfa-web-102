from django.db import models

# Create your models here.
class Employee(models.Model):
    emp_id      = models.IntegerField(blank=False)
    full_name   = models.CharField(max_length=50,blank=False)
    email       = models.CharField(max_length=100, blank=False)
    contact     = models.IntegerField(blank=True)
    
    # gender      = models.CharField(max_length=6 ,blank=True)
    # male, female (255 char)