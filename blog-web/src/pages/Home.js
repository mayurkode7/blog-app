import React, { useState, useEffect, useId } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase-config'

import BlogCard from '../components/BlogCard'

function Home({ isAuth }) {

  let id = useId()

  const [blogList, setBlogList] = useState(null)

  const blogCollectionRef = collection(db, "blogs")

  useEffect(() => {

    const getBlogList = async () => {

      const data = await getDocs(blogCollectionRef)
      setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getBlogList()


  }, [])


  const deleteBlog = async (id) => {
    const blogDoc = doc(db, "blogs", id)
    await deleteDoc(blogDoc)

  }


  return (
    <div className="homePage">
      {blogList && blogList.map((post) => {

        return (
          <BlogCard post={post} key={`${id}-${post.title}`} deleteBlog={deleteBlog} isAuth={isAuth} />
        );
      })}
    </div>
  );

}

export default Home