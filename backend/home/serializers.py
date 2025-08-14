from rest_framework import serializers
from .models import HeroSection

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = '__all__'