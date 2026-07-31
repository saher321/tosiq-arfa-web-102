from django.http import HttpResponse

def serverResponse(req):
    return HttpResponse("Python server is running...")