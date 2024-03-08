from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpRequest, HttpResponse

@api_view(["GET"])
def get_welcome(request: HttpRequest):
    return Response({"message": "Welcome yo ass down."})

@api_view(["GET"])
def hello(request):
    return HttpResponse("Thuwa says hi")