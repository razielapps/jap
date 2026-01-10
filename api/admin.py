from django.contrib import admin
from .models import (
    ME, Specialization, Skill, Certification, 
    Interest, Learning, Blog, Project, 
    Contact, ProfessionalTrait
)


class SpecializationInline(admin.TabularInline):
    model = Specialization
    extra = 0


class SkillInline(admin.TabularInline):
    model = Skill
    extra = 0


class CertificationInline(admin.TabularInline):
    model = Certification
    extra = 0


class InterestInline(admin.TabularInline):
    model = Interest
    extra = 0


class LearningInline(admin.TabularInline):
    model = Learning
    extra = 0


class BlogInline(admin.TabularInline):
    model = Blog
    extra = 0


class ProjectInline(admin.TabularInline):
    model = Project
    extra = 0


class ContactInline(admin.TabularInline):
    model = Contact
    extra = 0


class ProfessionalTraitInline(admin.TabularInline):
    model = ProfessionalTrait
    extra = 0


@admin.register(ME)
class MEAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')
    inlines = [
        SpecializationInline,
        SkillInline,
        CertificationInline,
        InterestInline,
        LearningInline,
        BlogInline,
        ProjectInline,
        ContactInline,
        ProfessionalTraitInline,
    ]


@admin.register(Specialization)
class SpecializationAdmin(admin.ModelAdmin):
    list_display = ('name', 'me', 'specialization_commitment_age', 'order')
    list_filter = ('me',)
    search_fields = ('name', 'specialization_skills')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('skill_name', 'me', 'skill_commitment_age', 'category', 'proficiency')
    list_filter = ('category', 'me')
    search_fields = ('skill_name', 'skill_certificates')


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ('certification_name', 'me', 'month_year_earned')
    list_filter = ('me',)
    search_fields = ('certification_name', 'skills_acquired')


@admin.register(Interest)
class InterestAdmin(admin.ModelAdmin):
    list_display = ('interest_name', 'me', 'since_interested')
    list_filter = ('me',)
    search_fields = ('interest_name', 'description')


@admin.register(Learning)
class LearningAdmin(admin.ModelAdmin):
    list_display = ('name', 'me', 'since_when', 'expected_finish_time', 'progress', 'is_active')
    list_filter = ('is_active', 'me')
    search_fields = ('name', 'why')


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'me', 'published_date', 'read_time')
    list_filter = ('me', 'published_date')
    search_fields = ('title', 'summary')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('project_name', 'me', 'provable', 'github_repo')
    list_filter = ('provable', 'me')
    search_fields = ('project_name', 'technologies', 'purpose')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('platform', 'me', 'username', 'is_primary')
    list_filter = ('platform', 'is_primary', 'me')
    search_fields = ('platform', 'link', 'username')


@admin.register(ProfessionalTrait)
class ProfessionalTraitAdmin(admin.ModelAdmin):
    list_display = ('trait_name', 'me', 'icon')
    list_filter = ('me',)
    search_fields = ('trait_name', 'comment')