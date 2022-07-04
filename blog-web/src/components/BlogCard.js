import React from 'react'
import { auth } from '../firebase-config'

function BlogCard({ post, deleteBlog, isAuth }) {

  return (
    <div className="post">
      <div className="postHeader">
        <div className="title">
          <h1> {post.title}</h1>
        </div>
        {(auth.currentUser.email == post.author.email) &&
          <div className='deletePost'>
            <button onClick={() => deleteBlog(post.id)}> &#126465;
            </button>
          </div>}

      </div>
      <div className="postTextContainer"> {post.blogText} </div>
      <h3>@ {post.author?.name}</h3>
    </div>
  )
}

export default BlogCard