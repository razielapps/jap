// src/components/Sections/Contact.tsx
import React from 'react';
import { Contact } from '../../lib/api';
import './Contact.css';

interface ContactProps {
  contacts: Contact[];
}

export const ContactSection: React.FC<ContactProps> = ({ contacts }) => {
  const getPlatformIcon = (platform: string) => {
    const icons: Record<string, string> = {
      'GitHub': '🐙',
      'LinkedIn': '💼',
      'Twitter': '🐦',
      'Email': '📧',
      'Discord': '🎮',
      'Medium': '✍️',
      'Dev.to': '👨‍💻',
      'Website': '🌐',
      'Other': '🔗'
    };
    return icons[platform] || '🔗';
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact & Connect</h2>
      <div className="contact-grid">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-card ${contact.is_primary ? 'primary-contact' : ''}`}
          >
            <div className="contact-platform">
              <span className="contact-icon">{getPlatformIcon(contact.platform)}</span>
              <h3 className="contact-platform-name">{contact.platform}</h3>
            </div>
            {contact.username && (
              <p className="contact-username">{contact.username}</p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};