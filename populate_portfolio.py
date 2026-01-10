# backend/populate_portfolio.py
import os
import django
import sys

# Add the project to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jap_backend.settings')
django.setup()

from api.models import (
    ME, Specialization, Skill, Certification, Interest,
    Learning, Blog, Project, Contact, ProfessionalTrait
)

def clear_all_data():
    """Delete all existing data"""
    print("Clearing existing data...")
    
    # Delete in reverse order to handle foreign key constraints
    ProfessionalTrait.objects.all().delete()
    Contact.objects.all().delete()
    Project.objects.all().delete()
    Blog.objects.all().delete()
    Learning.objects.all().delete()
    Interest.objects.all().delete()
    Certification.objects.all().delete()
    Skill.objects.all().delete()
    Specialization.objects.all().delete()
    ME.objects.all().delete()
    
    print("✓ All data cleared")

def create_portfolio():
    """Create a complete portfolio with sample data"""
    
    # 1. Create ME (Main Profile)
    print("\nCreating main profile...")
    me = ME.objects.create(
        name="Alex Morgan",
        bio="""Cybersecurity & Backend Security Engineer with 8+ years of experience specializing in secure system architecture, threat modeling, and penetration testing.

My expertise lies in building resilient backend systems that withstand sophisticated attacks while maintaining performance and scalability. I approach security as an integral part of the development lifecycle, not an afterthought.

Currently focused on Zero Trust Architecture implementation and researching emerging threats in cloud-native environments. Passionate about educating teams on secure coding practices and contributing to open-source security tools.

When not dissecting security vulnerabilities, I contribute to security research papers and mentor junior engineers in security best practices."""
    )
    print(f"✓ Created profile: {me.name}")
    
    # 2. Create Specializations
    print("\nAdding specializations...")
    specializations = [
        {
            'name': 'Backend Security Architecture',
            'commitment_age': 6,
            'skills': 'Secure API Design, Authentication Systems, Encryption Protocols, Rate Limiting, Input Validation',
            'projects': 'Built JWT-based auth system for microservices, Implemented Zero Trust Architecture for financial platform, Designed secure data encryption pipeline',
            'research': 'Researching side-channel attacks in distributed systems, Studying hardware security modules (HSM) integration patterns'
        },
        {
            'name': 'Application Security Testing',
            'commitment_age': 5,
            'skills': 'Penetration Testing, SAST/DAST, Threat Modeling, Vulnerability Assessment, Security Automation',
            'projects': 'Led security testing for 50+ microservices, Built automated security scanning pipeline, Conducted threat modeling workshops',
            'research': 'Exploring AI-powered vulnerability detection, Researching advanced persistent threat (APT) detection techniques'
        },
        {
            'name': 'Cloud Security',
            'commitment_age': 4,
            'skills': 'AWS Security, Container Security, Kubernetes Security, IAM Policies, Network Security Groups',
            'projects': 'Secured multi-cloud infrastructure, Implemented container security scanning, Designed VPC security architecture',
            'research': 'Studying cloud-native security patterns, Researching serverless security considerations'
        }
    ]
    
    for i, spec_data in enumerate(specializations):
        Specialization.objects.create(
            me=me,
            name=spec_data['name'],
            specialization_commitment_age=spec_data['commitment_age'],
            specialization_skills=spec_data['skills'],
            specialization_projects=spec_data['projects'],
            specialization_research=spec_data['research'],
            order=i
        )
        print(f"  ✓ {spec_data['name']} ({spec_data['commitment_age']} years)")
    
    # 3. Create Skills
    print("\nAdding skills...")
    skills = [
        # Security Skills
        {'name': 'Penetration Testing', 'years': 5, 'category': 'Security', 'proficiency': 90},
        {'name': 'Threat Modeling', 'years': 4, 'category': 'Security', 'proficiency': 85},
        {'name': 'Vulnerability Assessment', 'years': 5, 'category': 'Security', 'proficiency': 88},
        {'name': 'Security Automation', 'years': 3, 'category': 'Security', 'proficiency': 80},
        {'name': 'Cryptography', 'years': 4, 'category': 'Security', 'proficiency': 82},
        
        # Backend Skills
        {'name': 'Python Security', 'years': 6, 'category': 'Backend', 'proficiency': 92},
        {'name': 'Django Security', 'years': 5, 'category': 'Backend', 'proficiency': 88},
        {'name': 'API Security', 'years': 5, 'category': 'Backend', 'proficiency': 90},
        {'name': 'PostgreSQL Security', 'years': 4, 'category': 'Backend', 'proficiency': 85},
        {'name': 'Redis Security', 'years': 3, 'category': 'Backend', 'proficiency': 80},
        
        # Cloud & DevOps
        {'name': 'AWS Security', 'years': 4, 'category': 'Technical', 'proficiency': 85},
        {'name': 'Docker Security', 'years': 3, 'category': 'Technical', 'proficiency': 82},
        {'name': 'Kubernetes Security', 'years': 3, 'category': 'Technical', 'proficiency': 80},
        {'name': 'Terraform Security', 'years': 2, 'category': 'Technical', 'proficiency': 75},
        
        # Soft Skills
        {'name': 'Security Training', 'years': 4, 'category': 'Soft', 'proficiency': 85},
        {'name': 'Incident Response', 'years': 3, 'category': 'Soft', 'proficiency': 80},
        {'name': 'Risk Assessment', 'years': 4, 'category': 'Soft', 'proficiency': 82},
    ]
    
    for skill_data in skills:
        Skill.objects.create(
            me=me,
            skill_name=skill_data['name'],
            skill_commitment_age=skill_data['years'],
            category=skill_data['category'],
            proficiency=skill_data['proficiency'],
            skill_certificates=f"Certified in {skill_data['name']}" if skill_data['category'] == 'Security' else ""
        )
        print(f"  ✓ {skill_data['name']} ({skill_data['years']} years, {skill_data['proficiency']}%)")
    
    # 4. Create Certifications
    print("\nAdding certifications...")
    certifications = [
        {
            'name': 'Offensive Security Certified Professional (OSCP)',
            'skills': 'Penetration Testing, Exploitation, Privilege Escalation, Post-Exploitation',
            'projects': 'Completed 24-hour practical exam, Successfully exploited 30+ machines in lab environment',
            'start': '03/2022',
            'earned': '08/2022',
            'comment': 'Focused on practical, hands-on security testing skills',
            'credential_id': 'OSCP-1234-5678',
            'credential_url': 'https://www.credly.com/badges/oscp-certified'
        },
        {
            'name': 'AWS Certified Security - Specialty',
            'skills': 'AWS Security Services, IAM, Detective Controls, Infrastructure Security',
            'projects': 'Secured multi-account AWS environment, Implemented GuardDuty and Security Hub',
            'start': '01/2023',
            'earned': '04/2023',
            'comment': 'Specialized in cloud security on AWS platform',
            'credential_id': 'AWS-SEC-9876',
            'credential_url': 'https://www.credly.com/badges/aws-security'
        },
        {
            'name': 'Certified Information Systems Security Professional (CISSP)',
            'skills': 'Security and Risk Management, Asset Security, Security Architecture',
            'projects': 'Developed enterprise security policies, Conducted comprehensive risk assessments',
            'start': '06/2021',
            'earned': '12/2021',
            'comment': 'Demonstrated broad knowledge across security domains',
            'credential_id': 'CISSP-4567'
        },
        {
            'name': 'CompTIA Security+',
            'skills': 'Network Security, Threats and Vulnerabilities, Cryptography, Identity Management',
            'projects': 'Basic security implementations, Vulnerability assessments',
            'start': '09/2020',
            'earned': '12/2020',
            'comment': 'Foundational security certification'
        }
    ]
    
    for cert_data in certifications:
        Certification.objects.create(
            me=me,
            certification_name=cert_data['name'],
            skills_acquired=cert_data['skills'],
            projects_done=cert_data['projects'],
            month_year_started=cert_data['start'],
            month_year_earned=cert_data['earned'],
            comment=cert_data['comment'],
            credential_id=cert_data.get('credential_id'),
            credential_url=cert_data.get('credential_url')
        )
        print(f"  ✓ {cert_data['name']}")
    
    # 5. Create Interests
    print("\nAdding interests...")
    interests = [
        {'name': 'Security Research', 'since': '2018', 'desc': 'Exploring emerging security threats and defense mechanisms'},
        {'name': 'Open Source Security Tools', 'since': '2019', 'desc': 'Contributing to and using open-source security solutions'},
        {'name': 'Hardware Security', 'since': '2020', 'desc': 'Understanding hardware-level security and vulnerabilities'},
        {'name': 'Cryptography Algorithms', 'since': '2017', 'desc': 'Studying cryptographic protocols and implementations'},
        {'name': 'Capture The Flag (CTF)', 'since': '2019', 'desc': 'Participating in security competitions and challenges'},
        {'name': 'Reverse Engineering', 'since': '2021', 'desc': 'Analyzing malware and vulnerable software'},
    ]
    
    for interest_data in interests:
        Interest.objects.create(
            me=me,
            interest_name=interest_data['name'],
            since_interested=interest_data['since'],
            description=interest_data['desc']
        )
        print(f"  ✓ {interest_data['name']} (since {interest_data['since']})")
    
    # 6. Create Current Learnings
    print("\nAdding current learnings...")
    learnings = [
        {
            'name': 'Machine Learning for Security',
            'why': 'To understand how AI/ML can enhance threat detection and automate security operations',
            'since': '01/2024',
            'finish': '12/2024',
            'progress': 40
        },
        {
            'name': 'Rust Programming for Secure Systems',
            'why': 'Rust provides memory safety guarantees that are crucial for security-critical applications',
            'since': '10/2023',
            'finish': '06/2024',
            'progress': 70
        },
        {
            'name': 'Blockchain Security',
            'why': 'Understanding smart contract vulnerabilities and blockchain security patterns',
            'since': '03/2024',
            'finish': '09/2024',
            'progress': 25
        }
    ]
    
    for learning_data in learnings:
        Learning.objects.create(
            me=me,
            name=learning_data['name'],
            why=learning_data['why'],
            since_when=learning_data['since'],
            expected_finish_time=learning_data['finish'],
            progress=learning_data['progress'],
            is_active=True
        )
        print(f"  ✓ {learning_data['name']} ({learning_data['progress']}% progress)")
    
    # 7. Create Blog Posts
    print("\nAdding blog posts...")
    blogs = [
        {
            'title': 'Implementing Zero Trust in Microservices Architecture',
            'link': 'https://medium.com/@alexmorgan/zero-trust-microservices-12345',
            'summary': 'A comprehensive guide to implementing Zero Trust principles in distributed systems, covering service-to-service authentication, network policies, and continuous verification.',
            'published': '2024-01-15',
            'read_time': 12
        },
        {
            'title': '10 Common Django Security Mistakes and How to Avoid Them',
            'link': 'https://medium.com/@alexmorgan/django-security-mistakes-67890',
            'summary': 'Analysis of frequent security pitfalls in Django applications with practical solutions and code examples for secure development.',
            'published': '2023-11-20',
            'read_time': 8
        },
        {
            'title': 'Advanced Threat Modeling Techniques for Modern Applications',
            'link': 'https://medium.com/@alexmorgan/threat-modeling-techniques-45678',
            'summary': 'Exploring advanced threat modeling methodologies including STRIDE, PASTA, and attack trees for comprehensive security assessment.',
            'published': '2023-09-05',
            'read_time': 15
        }
    ]
    
    for blog_data in blogs:
        Blog.objects.create(
            me=me,
            title=blog_data['title'],
            medium_blog_link=blog_data['link'],
            summary=blog_data['summary'],
            published_date=blog_data['published'],
            read_time=blog_data['read_time']
        )
        print(f"  ✓ {blog_data['title']}")
    
    # 8. Create Professional Traits
    print("\nAdding professional traits...")
    traits = [
        {
            'name': 'Detail-Oriented',
            'comment': 'Meticulous in identifying security vulnerabilities and implementing precise solutions',
            'icon': '🔍'
        },
        {
            'name': 'Proactive Problem Solver',
            'comment': 'Anticipates security challenges and implements preventive measures before issues arise',
            'icon': '⚡'
        },
        {
            'name': 'Continuous Learner',
            'comment': 'Constantly updating knowledge to stay ahead of evolving security threats and technologies',
            'icon': '📚'
        },
        {
            'name': 'Collaborative',
            'comment': 'Works effectively with development teams to integrate security throughout the SDLC',
            'icon': '🤝'
        },
        {
            'name': 'Ethical Mindset',
            'comment': 'Strong commitment to ethical security practices and responsible vulnerability disclosure',
            'icon': '⚖️'
        }
    ]
    
    for trait_data in traits:
        ProfessionalTrait.objects.create(
            me=me,
            trait_name=trait_data['name'],
            comment=trait_data['comment'],
            icon=trait_data['icon']
        )
        print(f"  ✓ {trait_data['name']}")
    
    # 9. Create Projects
    print("\nAdding projects...")
    projects = [
        {
            'name': 'SecureAuth API',
            'purpose': 'A comprehensive authentication and authorization microservice with advanced security features',
            'demo': 'Demo includes JWT token generation, role-based access control, and audit logging capabilities',
            'provable': True,
            'link': 'https://github.com/alexmorgan/secureauth',
            'github': 'https://github.com/alexmorgan/secureauth',
            'live': 'https://demo.secureauth-api.com',
            'tech': 'Python, Django, PostgreSQL, Redis, JWT, OAuth2'
        },
        {
            'name': 'VulnScan CLI Tool',
            'purpose': 'Command-line vulnerability scanner for web applications with customizable security checks',
            'demo': 'Can demonstrate scanning a test application and generating security reports',
            'provable': True,
            'link': 'https://github.com/alexmorgan/vulnscan',
            'github': 'https://github.com/alexmorgan/vulnscan',
            'tech': 'Python, Requests, BeautifulSoup, Security Headers Analysis'
        },
        {
            'name': 'Zero Trust Architecture Implementation',
            'purpose': 'Reference implementation of Zero Trust principles for microservices architecture',
            'demo': 'Demo shows service-to-service authentication and network policy enforcement',
            'provable': True,
            'link': 'https://github.com/alexmorgan/zero-trust-demo',
            'github': 'https://github.com/alexmorgan/zero-trust-demo',
            'tech': 'Kubernetes, Istio, OPA, SPIRE, mTLS'
        },
        {
            'name': 'Security Training Platform',
            'purpose': 'Interactive platform for security awareness training with simulated attacks',
            'demo': 'Demo includes phishing simulation and secure coding exercises',
            'provable': True,
            'link': 'https://github.com/alexmorgan/security-training',
            'github': 'https://github.com/alexmorgan/security-training',
            'live': 'https://training.security-demo.com',
            'tech': 'React, Django, Docker, Cybersecurity Training Modules'
        }
    ]
    
    for project_data in projects:
        Project.objects.create(
            me=me,
            project_name=project_data['name'],
            purpose=project_data['purpose'],
            demonstration=project_data['demo'],
            provable=project_data['provable'],
            link=project_data['link'],
            github_repo=project_data.get('github'),
            live_demo=project_data.get('live'),
            technologies=project_data['tech']
        )
        print(f"  ✓ {project_data['name']}")
    
    # 10. Create Contacts
    print("\nAdding contact information...")
    contacts = [
        {'platform': 'GitHub', 'link': 'https://github.com/alexmorgan', 'username': '@alexmorgan', 'primary': True},
        {'platform': 'LinkedIn', 'link': 'https://linkedin.com/in/alexmorgan', 'username': 'Alex Morgan', 'primary': True},
        {'platform': 'Email', 'link': 'mailto:alex@security-engineer.dev', 'username': 'alex@security-engineer.dev', 'primary': True},
        {'platform': 'Twitter', 'link': 'https://twitter.com/sec_alex', 'username': '@sec_alex'},
        {'platform': 'Medium', 'link': 'https://medium.com/@alexmorgan', 'username': '@alexmorgan'},
        {'platform': 'Discord', 'link': 'https://discord.gg/security', 'username': 'security_alex#1234'},
    ]
    
    for contact_data in contacts:
        Contact.objects.create(
            me=me,
            platform=contact_data['platform'],
            link=contact_data['link'],
            username=contact_data['username'],
            is_primary=contact_data.get('primary', False)
        )
        print(f"  ✓ {contact_data['platform']}: {contact_data['username']}")
    
    print(f"\n{'='*60}")
    print("✅ PORTFOLIO SUCCESSFULLY POPULATED!")
    print(f"{'='*60}")
    print(f"\nSummary:")
    print(f"  • Profile: {me.name}")
    print(f"  • Specializations: {Specialization.objects.count()}")
    print(f"  • Skills: {Skill.objects.count()}")
    print(f"  • Certifications: {Certification.objects.count()}")
    print(f"  • Interests: {Interest.objects.count()}")
    print(f"  • Current Learnings: {Learning.objects.filter(is_active=True).count()}")
    print(f"  • Blog Posts: {Blog.objects.count()}")
    print(f"  • Professional Traits: {ProfessionalTrait.objects.count()}")
    print(f"  • Projects: {Project.objects.count()}")
    print(f"  • Contacts: {Contact.objects.count()}")
    print(f"\nAccess admin at: http://localhost:8000/admin")
    print(f"API endpoint: http://localhost:8000/api/me/portfolio_data/")

if __name__ == '__main__':
    print("🔧 JAP Portfolio Population Script")
    print("="*60)
    
    # Confirmation
    response = input("\n⚠️  This will DELETE ALL EXISTING DATA and create new sample data.\nProceed? (yes/no): ")
    
    if response.lower() == 'yes':
        clear_all_data()
        create_portfolio()
    else:
        print("Operation cancelled.")