import React, { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'

function Home() {

  const [blogList, setBlogList] = useState(null)

  const blogCollectionRef = collection(db, "blogs")

  useEffect(() => {

    const getBlogList = async () => {

      const data = await getDocs(blogCollectionRef)
      setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getBlogList()

  }, [])

  return (
    <>
      <div>Home</div>

      {blogList && blogList.map(item => <p> {item.title}</p>)}
    </>
  )
}

export default Home