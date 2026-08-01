from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.

def EmployeePage(req):
    employee_page = loader.get_template("employees.html")
    return HttpResponse(employee_page.render())
