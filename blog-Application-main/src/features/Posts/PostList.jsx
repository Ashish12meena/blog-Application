import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
    const handleViewPost = (id) => {
        // Navigate to the post detail page
        console.log(`Navigate to post with ID: ${id}`);
    };

    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} onViewPost={handleViewPost} />
            ))}
        </div>
    );
};

export default PostList;
