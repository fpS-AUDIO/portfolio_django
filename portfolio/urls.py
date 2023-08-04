from django.urls import path
from . import views 

app_name = "portfolio"

urlpatterns = [
    path("", views.homepage, name="homepage"),
    # path("my_past/", views.my_past, name="my_past"),
]