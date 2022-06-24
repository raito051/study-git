from django.shortcuts import render
from requests import request

def Test(request):
    return render(request, 'templates/home/home.html')

def Test_2(request):
    return render(request, 'templates/home/header.html')