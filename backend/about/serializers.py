from rest_framework import serializers
from . models import SocialLinks,TechnicalSkill
class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model=SocialLinks
        fields='__all__'
class TechskillSerializer(serializers.ModelSerializer):
    class Meta:
        model=TechnicalSkill
        fields='__all__'
        