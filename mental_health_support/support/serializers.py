from rest_framework import serializers
from .models import Experience, SupportGroup, Professional

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class SupportGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportGroup
        fields = '__all__'

class ProfessionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professional
        fields = '__all__'
