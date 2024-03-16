import React from 'react';

function BlogPostCard({ image, title, description }) {
    return (
        <div className="card w-auto glass text-left">
            <figure><img src={image} alt="Blog Post"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Lesen</button>
                </div>
            </div>
        </div>
    );
}

export default BlogPostCard;
