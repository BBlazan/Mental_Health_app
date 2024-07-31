from django.shortcuts import render
from rest_framework import viewsets
from .models import Experience, SupportGroup, Professional
from .serializers import ExperienceSerializer, SupportGroupSerializer, ProfessionalSerializer

class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class SupportGroupViewSet(viewsets.ModelViewSet):
    queryset = SupportGroup.objects.all()
    serializer_class = SupportGroupSerializer

class ProfessionalViewSet(viewsets.ModelViewSet):
    queryset = Professional.objects.all()
    serializer_class = ProfessionalSerializer

# Create your views here.
