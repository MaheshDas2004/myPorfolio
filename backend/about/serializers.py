from rest_framework import serializers
from . models import SocialLinks
class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model=SocialLinks
        fields='__all__'
