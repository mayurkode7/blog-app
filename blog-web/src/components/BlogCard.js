import React from 'react'

function BlogCard({ post }) {
  return (
    <div className="post">
      <div className="postHeader">
        <div className="title">
          <h1> {post.title}</h1>
        </div>
      </div>
      <div className="postTextContainer"> {post.blogText} </div>
      <h3>@ {post.author?.name}</h3>
    </div>
  )
}

export default BlogCard