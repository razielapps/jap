from rest_framework import serializers
from .models import (
    ME, Specialization, Skill, Certification, 
    Interest, Learning, Blog, Project, 
    Contact, ProfessionalTrait
)


class ProfessionalTraitSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfessionalTrait
        fields = '__all__'
        read_only_fields = ('id', 'created_at')


class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = '__all__'
        read_only_fields = ('id',)


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
        read_only_fields = ('id',)


class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'
        read_only_fields = ('id',)


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = '__all__'
        read_only_fields = ('id',)


class LearningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Learning
        fields = '__all__'
        read_only_fields = ('id',)


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
        read_only_fields = ('id',)


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ('id',)


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        read_only_fields = ('id',)


class MESerializer(serializers.ModelSerializer):
    specializations = SpecializationSerializer(many=True, read_only=True)
    skills = SkillSerializer(many=True, read_only=True)
    certifications = CertificationSerializer(many=True, read_only=True)
    interests = InterestSerializer(many=True, read_only=True)
    learnings = LearningSerializer(many=True, read_only=True)
    blogs = BlogSerializer(many=True, read_only=True)
    projects = ProjectSerializer(many=True, read_only=True)
    contacts = ContactSerializer(many=True, read_only=True)
    traits = ProfessionalTraitSerializer(many=True, read_only=True)
    
    class Meta:
        model = ME
        fields = [
            'id', 'name', 'bio', 'created_at', 'updated_at',
            'specializations', 'skills', 'certifications', 
            'interests', 'learnings', 'blogs', 'projects',
            'contacts', 'traits'
        ]
        read_only_fields = ('id', 'created_at', 'updated_at')