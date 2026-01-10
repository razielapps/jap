// src/components/Sections/Contact.tsx
import React from 'react';
import { Contact } from '../../lib/api';
import './Contact.css';

interface ContactProps {
  contacts: Contact[];
  onViewDetail?: () => void;
}

export const ContactSection: React.FC<ContactProps> = ({ contacts, onViewDetail }) => {
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

  const primaryContacts = contacts.filter(contact => contact.is_primary);
  const secondaryContacts = contacts.filter(contact => !contact.is_primary);

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Contact & Connect</h2>
        {onViewDetail && (
          <button onClick={onViewDetail} className="view-detail-button">
            All Contact Options →
          </button>
        )}
      </div>
      
      <div className="contact-grid">
        {primaryContacts.slice(0, 3).map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card primary-contact"
          >
            <div className="contact-platform">
              <span className="contact-icon">{getPlatformIcon(contact.platform)}</span>
              <h3 className="contact-platform-name">{contact.platform}</h3>
            </div>
            {contact.username && (
              <p className="contact-username">{contact.username}</p>
            )}
            <span className="contact-label">Primary Contact</span>
          </a>
        ))}
        
        {secondaryContacts.slice(0, 2).map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
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
      
      {(contacts.length > 5 || (secondaryContacts.length > 2)) && onViewDetail && (
        <div className="section-footer">
          <button onClick={onViewDetail} className="view-more-button">
            View all {contacts.length} contact options →
          </button>
        </div>
      )}
    </section>
  );
};