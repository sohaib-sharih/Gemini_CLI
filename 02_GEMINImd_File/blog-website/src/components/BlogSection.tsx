import React from 'react';
import Card from './Card';
import './BlogSection.css';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    description: 'Learn the basics of React Hooks and how they can simplify your component logic.',
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    id: 2,
    title: 'A Deep Dive into TypeScript',
    description: 'Explore advanced TypeScript features and how to leverage them in large applications.',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    id: 3,
    title: 'Optimizing Web Performance',
    description: 'Tips and tricks to make your web applications load faster and run smoother.',
    imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <h2>Recent Blog Posts</h2>
      <div className="blog-cards-container">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            link={post.link}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
