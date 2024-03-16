import React from 'react';
import { Link } from 'react-router-dom';

function BlogPostCard({ id, image, title, description }) {
    return (
        <div className="card w-auto glass text-left">
            <figure><img src={image} alt="Blog Post" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <Link to={`/post/${id}`} className="btn btn-primary">Lesen</Link>
                </div>
            </div>
        </div>
    );
}

export default BlogPostCard;
