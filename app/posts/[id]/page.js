import React from 'react'
import PostForm from '../_components/PostForm'

const UpdatePost = async ({ params }) => {
  const { id } = await params
  const posts = await fetch(`http://localhost:3000/api/post/${id}`, {cache: "no-store"})
  const postInfo = await posts.json()
  return (
    <div>
      <PostForm postInfo = {postInfo}/>
    </div>
  )
}

export default UpdatePost
