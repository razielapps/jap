from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    MEViewSet, SpecializationViewSet, SkillViewSet,
    CertificationViewSet, InterestViewSet, LearningViewSet,
    BlogViewSet, ProjectViewSet, ContactViewSet,
    ProfessionalTraitViewSet
)

router = DefaultRouter()
router.register(r'me', MEViewSet, basename='me')
router.register(r'specializations', SpecializationViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'certifications', CertificationViewSet)
router.register(r'interests', InterestViewSet)
router.register(r'learnings', LearningViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'traits', ProfessionalTraitViewSet)

urlpatterns = [
    path('', include(router.urls)),
]