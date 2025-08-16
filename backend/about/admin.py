from django.contrib import admin
from . models import SocialLinks,TechnicalSkill,WhatIDo,PersonalInfo
# Register your models here.

admin.site.register(SocialLinks)
admin.site.register(TechnicalSkill)
admin.site.register(WhatIDo)
admin.site.register(PersonalInfo)