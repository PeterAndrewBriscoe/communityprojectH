import React from 'react';
import ReactDOM from 'react-dom';

const blogs = [
    { id: 1, title: "post 1", content: "lorem ipsum est" }
    // ... more blogs
];

const BlogList = ({ blogs }) => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {blogs.map(blog => (
                    <BlogPost 
                        key={blog.id} 
                        title={blog.title} 
                        content={blog.content} 
                        onClick={() => handleBlogClick(blog.id)} 
                    />
                ))}
            </ul>
        </div>
    );
}

const BlogPost = ({ title, content, onClick }) => {
    return (
        <li onClick={onClick}>
            <h2>{title}</h2>
            <p>{content}</p>
        </li>
    );
}

const handleBlogClick = (blogId) => {
    // Handle the click event here
    console.log(`Blog post ${blogId} was clicked`);
}

ReactDOM.render(
    <BlogList blogs={blogs} />,
    document.getElementById('root')
);

export default {BlogList, BlogPost}