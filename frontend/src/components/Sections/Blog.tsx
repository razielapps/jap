// src/components/Sections/Blog.tsx
import React from 'react';
import { Blog } from '../../lib/api';
import './Blog.css';

interface BlogProps {
  blogs: Blog[];
}

export const BlogSection: React.FC<BlogProps> = ({ blogs }) => (
  <section className="blog-section" id="blog">
    <h2 className="section-title">Blog & Writings</h2>
    <div className="blog-list">
      {blogs.map((blog) => (
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
  </section>
);