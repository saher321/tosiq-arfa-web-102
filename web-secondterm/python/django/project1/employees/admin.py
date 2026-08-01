from django.contrib import admin
from .models import Employee


# Register your models here.
class EmployeeData(admin.ModelAdmin):
    list_display = ("emp_id","full_name", "email", "contact")


admin.site.register(Employee, EmployeeData)