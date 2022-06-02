import React, { useState, useEffect } from 'react'

function CreateBlog() {

  const [title, setTitle] = useState("")
  const [blogText, setBlogText] = useState("")

  const createBlog = () => { }

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Blog</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Blog:</label>
          <textarea
            placeholder="Blog..."
            onChange={(event) => {
              setBlogText(event.target.value);
            }}
          />
        </div>
        <button onClick={createBlog}> Submit Blog</button>
      </div>
    </div>
  )
}

export default CreateBlog