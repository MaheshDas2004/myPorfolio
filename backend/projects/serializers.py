from .models import Project
from rest_framework import serializers
from about.serializers import TechskillSerializer

class ProjectSerializer(serializers.ModelSerializer):
    technologies=TechskillSerializer(many=True, read_only=True)

    class Meta:
        model=Project
        fields='__all__'