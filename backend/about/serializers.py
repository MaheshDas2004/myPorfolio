from rest_framework import serializers
from . models import SocialLinks, SoftSkill,TechnicalSkill,WhatIDo,PersonalInfo,Education
class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model=SocialLinks
        fields='__all__'
class TechskillSerializer(serializers.ModelSerializer):
    class Meta:
        model=TechnicalSkill
        fields='__all__'

class SoftSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model=SoftSkill
        fields='__all__'

class WhatIDoSerializer(serializers.ModelSerializer):
    class Meta:
        model=WhatIDo
        fields='__all__'
        
class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Education
        fields='__all__'

class AboutMeSerializer(serializers.ModelSerializer):
    technologies=TechskillSerializer(many=True, read_only=True)
    softskills=SoftSkillSerializer(many=True, read_only=True)
    whatido=WhatIDoSerializer(many=True,read_only=True)
    education=EducationSerializer(many=True, read_only=True)
    class Meta:
        model=PersonalInfo
        fields='__all__'
