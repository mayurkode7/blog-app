import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase-config'

function CreateBlog() {

  const [title, setTitle] = useState("")
  const [blogText, setBlogText] = useState("")

  const blogsCollectionRef = collection(db, "blogs")

  const navigate = useNavigate()

  const createBlog = async () => {

    const data = { title, blogText, author: { name: auth.currentUser.displayName, email: auth.currentUser.email } }
    await addDoc(blogsCollectionRef, data)
    navigate("/")
  }

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