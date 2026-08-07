from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from django.template import loader
from .models import Employee
# Create your views here.

def EmployeePage(req):
    employees = Employee.objects.values()
    # select * from employees_employee
    page = "employees.html"
    # employee_page = loader.get_template("employees.html")

    context = {
        'employees' : employees
    }

    return render(req, page, context)

def AddEmployeePage(req):

    page = "addEmployee.html"

    if req.method == "POST":
        # name = req.POST['fname']
        # email = req.POST['email']
        # print(name, email)
        Employee.objects.create(
            emp_id = req.POST['empid'],
            full_name = req.POST['fname'],
            email = req.POST['email'],
            contact = req.POST['contact']
        )
        return redirect("employees")
    return render(req, page)

# http://localhost:8000/employees/details/1
def EmployeeDetailsPage(req, id):
    employee = get_object_or_404(Employee, id=id)

    page = "employeeDetails.html"

    context = {
        'employee' : employee
    }

    return render(req, page, context)

def DeleteEmployee(req, id):
    employee = get_object_or_404(Employee, id=id)

    employee.delete()

    return redirect("employees")
