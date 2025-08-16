from rest_framework import serializers
from . models import SocialLinks,TechnicalSkill,WhatIDo,PersonalInfo
class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model=SocialLinks
        fields='__all__'
class TechskillSerializer(serializers.ModelSerializer):
    class Meta:
        model=TechnicalSkill
        fields='__all__'

class WhatIDoSerializer(serializers.ModelSerializer):
    class Meta:
        model=WhatIDo
        fields='__all__'
        
class AboutMeSerializer(serializers.ModelSerializer):
    technologies=TechskillSerializer(many=True, read_only=True)
    whatido=WhatIDoSerializer(many=True,read_only=True)
    class Meta:
        model=PersonalInfo
        fields='__all__'