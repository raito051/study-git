from django.shortcuts import render
from requests import request

def Test(request):
    return render(request, 'templates/home.html')