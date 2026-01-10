from django.db import models
from django.core.validators import URLValidator

class ME(models.Model):
    name = models.CharField(max_length=200)
    bio = models.TextField(help_text="Introduction about yourself")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Personal Information"
        verbose_name_plural = "Personal Information"
    
    def __str__(self):
        return self.name


class Specialization(models.Model):
    me = models.ForeignKey(ME, on_delete=models.CASCADE, related_name='specializations')
    name = models.CharField(max_length=200)
    specialization_commitment_age = models.IntegerField(help_text="Years of experience in this specialization")
    specialization_skills = models.TextField(help_text="Comma-separated list of skills")
    specialization_projects = models.TextField(help_text="Description of related projects")
    specialization_research = models.TextField(help_text="Research work in this area")
    order = models.IntegerField(default=0, help_text="Display order")
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.name} ({self.specialization_commitment_age} years)"


class Skill(models.Model):
    me = models.ForeignKey(ME, on_delete=models.CASCADE, related_name='skills')
    skill_name = models.CharField(max_length=200)
    skill_commitment_age = models.FloatField(help_text="Years of experience with this skill")
    skill_certificates = models.TextField(help_text="Related certifications", blank=True, null=True)
    category = models.CharField(max_length=100, default="Technical", 
                               choices=[('Technical', 'Technical'), 
                                       ('Security', 'Security'),
                                       ('Backend', 'Backend'),
                                       ('Soft', 'Soft Skills')])
    proficiency = models.IntegerField(default=80, help_text="Proficiency percentage (0-100)")
    
    class Meta:
        ordering = ['-proficiency', 'skill_name']
    
    def __str__(self):
        return f"{self.skill_name} ({self.skill_commitment_age} years)"


class Certification(models.Model):
    me = models.ForeignKey(ME, on_delete=models.CASCADE, related_name='certifications')
    certification_name = models.CharField(max_length=300)
    skills_acquired = models.TextField(help_text="Skills gained from this certification")
    projects_done = models.TextField(help_text="Projects completed during certification", blank=True, null=True)
    month_year_started = models.CharField(max_length=50, help_text="MM/YYYY format")
    month_year_earned = models.CharField(max_length=50, help_text="MM/YYYY format")
    comment = models.TextField(blank=True, null=True)
    credential_id = models.CharField(max_length=100, blank=True, null=True)
    credential_url = models.URLField(blank=True, null=True, validators=[URLValidator()])
    
    class Meta:
        ordering = ['-month_year_earned']
    
    def __str__(self):
        return self.certification_name


class Interest(models.Model):
    me = models.ForeignKey(ME, on_delete=models.CASCADE, related_name='interests')
    interest_name = models.CharField(max_length=200)
    since_interested = models.CharField(max_length=50, help_text="Month/Year when interest began")
    description = models.TextField(blank=True, null=True)
    
    class Meta:
        ordering = ['interest_name']
    
    def __str__(self):
        return self.interest_name


class Learning(models.Model):
    me = models.ForeignKey(ME, on_delete=models.CASCADE, related_name='learnings')
    name = models.CharField(max_length=300)
    why = models.TextField(help_text="Why learning this?")
    since_when = models.CharField(max_length=50, help_text="Month/Year started")
    expected_finish_time = models.CharField(max_length=50, help_text="Expected completion date")
    progress = models.IntegerField(default=0, help_text="Progress percentage (0-100)")
    is_active = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['-is_active', 'expected_finish_time']
    
    def __str__(self):
        return f"{self.name} ({self.progress}%)"


class Blog(models.Model):
    me = models.ForeignKey(ME, on_delete=models.CASCADE, related_name='blogs')
    medium_blog_link = models.URLField(validators=[URLValidator()])
    summary = models.TextField()
    title = models.CharField(max_length=300)
    published_date = models.DateField(blank=True, null=True)
    read_time = models.IntegerField(help_text="Estimated read time in minutes", blank=True, null=True)
    
    class Meta:
        ordering = ['-published_date']
    
    def __str__(self):
        return self.title


class Project(models.Model):
    me = models.ForeignKey(ME, on_delete=models.CASCADE, related_name='projects')
    project_name = models.CharField(max_length=300)
    demonstration = models.TextField(help_text="How to demonstrate this project")
    purpose = models.TextField()
    provable = models.BooleanField(default=True)
    link = models.URLField(validators=[URLValidator()])
    technologies = models.TextField(help_text="Comma-separated list of technologies used")
    github_repo = models.URLField(blank=True, null=True, validators=[URLValidator()])
    live_demo = models.URLField(blank=True, null=True, validators=[URLValidator()])
    
    class Meta:
        ordering = ['project_name']
    
    def __str__(self):
        return self.project_name


class Contact(models.Model):
    me = models.ForeignKey(ME, on_delete=models.CASCADE, related_name='contacts')
    platform = models.CharField(max_length=100, 
                               choices=[('GitHub', 'GitHub'),
                                       ('LinkedIn', 'LinkedIn'),
                                       ('Twitter', 'Twitter'),
                                       ('Email', 'Email'),
                                       ('Discord', 'Discord'),
                                       ('Medium', 'Medium'),
                                       ('Dev.to', 'Dev.to'),
                                       ('Website', 'Website'),
                                       ('Other', 'Other')])
    link = models.CharField(max_length=500, help_text="Platform:link format or just the link")
    username = models.CharField(max_length=200, blank=True, null=True)
    is_primary = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-is_primary', 'platform']
    
    def __str__(self):
        return f"{self.platform}: {self.username or self.link}"


class ProfessionalTrait(models.Model):
    me = models.ForeignKey(ME, on_delete=models.CASCADE, related_name='traits')
    trait_name = models.CharField(max_length=200)
    comment = models.TextField()
    icon = models.CharField(max_length=100, blank=True, null=True, 
                           help_text="FontAwesome icon class or similar")
    
    class Meta:
        ordering = ['trait_name']
    
    def __str__(self):
        return self.trait_name