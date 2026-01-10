// src/components/Sections/Blog.tsx
import React from 'react';
import { Blog } from '../../lib/api';
import './Blog.css';

interface BlogProps {
  blogs: Blog[];
  onViewDetail?: () => void;
}

export const BlogSection: React.FC<BlogProps> = ({ blogs, onViewDetail }) => (
  <section className="blog-section" id="blog">
    <div className="section-header">
      <h2 className="section-title">Blog & Writings</h2>
      {onViewDetail && (
        <button onClick={onViewDetail} className="view-detail-button">
          View All Posts →
        </button>
      )}
    </div>
    <div className="blog-list">
      {blogs.slice(0, 2).map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3 className="blog-title">{blog.title}</h3>
          
          <div className="blog-meta">
            {blog.published_date && (
              <span className="blog-date">
                Published: {new Date(blog.published_date).toLocaleDateString()}
              </span>
            )}
            {blog.read_time && (
              <span className="blog-read-time">📖 {blog.read_time} min read</span>
            )}
          </div>
          
          <p className="blog-summary">{blog.summary}</p>
          
          <a 
            href={blog.medium_blog_link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-link"
          >
            Read on Medium →
          </a>
        </div>
      ))}
    </div>
    
    {blogs.length > 2 && onViewDetail && (
      <div className="section-footer">
        <button onClick={onViewDetail} className="view-more-button">
          View all {blogs.length} blog posts →
        </button>
      </div>
    )}
  </section>
);