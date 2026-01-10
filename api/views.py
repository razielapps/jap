from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from .models import (
    ME, Specialization, Skill, Certification, 
    Interest, Learning, Blog, Project, 
    Contact, ProfessionalTrait
)
from .serializers import (
    MESerializer, SpecializationSerializer, SkillSerializer,
    CertificationSerializer, InterestSerializer, LearningSerializer,
    BlogSerializer, ProjectSerializer, ContactSerializer,
    ProfessionalTraitSerializer
)


class MEViewSet(viewsets.ModelViewSet):
    queryset = ME.objects.all()
    serializer_class = MESerializer
    permission_classes = [AllowAny]
    lookup_field = 'id'
    
    def get_queryset(self):
        # Typically only one ME instance exists
        return ME.objects.all()
    
    @action(detail=False, methods=['get'])
    def portfolio_data(self, request):
        """
        Get complete portfolio data in a single endpoint
        """
        me_instance = ME.objects.first()
        if not me_instance:
            return Response(
                {"detail": "No portfolio data found"}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        serializer = self.get_serializer(me_instance)
        return Response(serializer.data)


class SpecializationViewSet(viewsets.ModelViewSet):
    queryset = Specialization.objects.all()
    serializer_class = SpecializationSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        # Filter by ME instance if provided
        me_id = self.request.query_params.get('me_id')
        if me_id:
            return Specialization.objects.filter(me_id=me_id)
        return super().get_queryset()


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        me_id = self.request.query_params.get('me_id')
        if me_id:
            return Skill.objects.filter(me_id=me_id)
        return super().get_queryset()
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """
        Get skills grouped by category
        """
        me_id = request.query_params.get('me_id')
        skills = Skill.objects.all()
        if me_id:
            skills = skills.filter(me_id=me_id)
        
        categories = {}
        for skill in skills:
            category = skill.category
            if category not in categories:
                categories[category] = []
            serializer = self.get_serializer(skill)
            categories[category].append(serializer.data)
        
        return Response(categories)


class CertificationViewSet(viewsets.ModelViewSet):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        me_id = self.request.query_params.get('me_id')
        if me_id:
            return Certification.objects.filter(me_id=me_id)
        return super().get_queryset()


class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        me_id = self.request.query_params.get('me_id')
        if me_id:
            return Interest.objects.filter(me_id=me_id)
        return super().get_queryset()


class LearningViewSet(viewsets.ModelViewSet):
    queryset = Learning.objects.all()
    serializer_class = LearningSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        me_id = self.request.query_params.get('me_id')
        if me_id:
            return Learning.objects.filter(me_id=me_id, is_active=True)
        return super().get_queryset()


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        me_id = self.request.query_params.get('me_id')
        if me_id:
            return Blog.objects.filter(me_id=me_id)
        return super().get_queryset()


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        me_id = self.request.query_params.get('me_id')
        if me_id:
            return Project.objects.filter(me_id=me_id)
        return super().get_queryset()
    
    @action(detail=False, methods=['get'])
    def provable(self, request):
        """
        Get only provable projects
        """
        me_id = request.query_params.get('me_id')
        projects = Project.objects.filter(provable=True)
        if me_id:
            projects = projects.filter(me_id=me_id)
        
        serializer = self.get_serializer(projects, many=True)
        return Response(serializer.data)


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        me_id = self.request.query_params.get('me_id')
        if me_id:
            return Contact.objects.filter(me_id=me_id)
        return super().get_queryset()


class ProfessionalTraitViewSet(viewsets.ModelViewSet):
    queryset = ProfessionalTrait.objects.all()
    serializer_class = ProfessionalTraitSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        me_id = self.request.query_params.get('me_id')
        if me_id:
            return ProfessionalTrait.objects.filter(me_id=me_id)
        return super().get_queryset()