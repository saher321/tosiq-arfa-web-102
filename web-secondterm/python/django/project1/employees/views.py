from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Employee
# Create your views here.

def EmployeePage(req):
    employees = Employee.objects.values()
    page = "employees.html"
    # employee_page = loader.get_template("employees.html")

    context = {
        'employees' : employees
    }

    return render(req, page, context)

def EmployeeDetailsPage(req, id):
    employee = Employee.objects.get(id=id)

    page = "employeeDetails.html"

    context = {
        'employee' : employee
    }

    return render(req, page, context)
