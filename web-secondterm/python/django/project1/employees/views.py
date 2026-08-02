from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Employee
# Create your views here.

def EmployeePage(req):
    employees = Employee.objects.values()
    # page = "employees.html"
    # return render(page, req)
    employee_page = loader.get_template("employees.html")

    context = {
        'employees' : employees
    }

    return HttpResponse(employee_page.render(context))
