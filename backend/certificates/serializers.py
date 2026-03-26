from rest_framework import serializers
from .models import Certificates


class CertificatesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Certificates
        fields='__all__'