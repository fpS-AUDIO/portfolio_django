from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse

# first we need to import everything for django built-in functionality

# If you ever want a view to require the user to be logged in, you can decorate it with "login_required "
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login, logout



def index(request):
    return HttpResponseRedirect(reverse('portfolio:homepage'))

def homepage(request):
    context_dict = {}
    return render(request, "portfolio/main_body.html", context=context_dict)

""" def my_past(request):
    return render(request, "portfolio/my_past.html", {} )
 """