from django.urls import path
from . import views

urlpatterns = [
    path('get_welcome/', views.get_welcome, name="get_welcome"),
    path('', views.hello, name="hello"),
    #path("blogs/", include("blogs.urls")),
    #path("api/", include("api.urls")),
]
