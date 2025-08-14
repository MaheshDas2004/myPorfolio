from django.shortcuts import render
from rest_framework import generics
from home.models import HeroSection
from home.serializers import HeroSerializer
from about.models import SocialLinks
from about.serializers import LinkSerializer
from projects.models import Project
from projects.serializers import ProjectSerializer
# Create your views here.
class HeroView(generics.ListAPIView):
    queryset = HeroSection.objects.all()
    serializer_class = HeroSerializer

class LinkView(generics.ListAPIView):
    queryset=SocialLinks.objects.all()
    serializer_class=LinkSerializer
class ProjectView(generics.ListAPIView):
    queryset=Project.objects.all()
    serializer_class=ProjectSerializer