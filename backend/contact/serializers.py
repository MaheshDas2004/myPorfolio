from rest_framework import serializers

from .models import ContactInfo
from about.models import SocialLinks
from about.serializers import LinkSerializer

class Contactserializer(serializers.ModelSerializer):
    links=LinkSerializer(many=True,read_only=True)
    class Meta:
        model=ContactInfo
        fields='__all__'
