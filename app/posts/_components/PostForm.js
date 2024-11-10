"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const PostForm = async ({ postInfo }) => {
   const router = useRouter()
      
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const formData = new FormData(e.target)
            const data = {
                title: formData.get("title"),
                body: formData.get("body"),
            }
        
            let response
            if(postInfo){
                response = await fetch(`http://localhost:3000/api/post/${postInfo.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                })
                response.ok? toast.success("Post updated") : toast.error('Failed to update')
                router.push('/posts')
                router.refresh()
              }else {
                response = await fetch('http://localhost:3000/api/post', {
                  method: 'POST',
                  body: JSON.stringify(data),
              })
              response.ok? toast.success("New Post added") : toast.error('Failed to add new post')
                router.push('/posts')
                router.refresh()
              }

        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className="w-full bg-bgColor text-white">
    <Card className = "max-w-lg mx-auto p-4 bg-bgColor  text-white">
  <CardHeader>
    <CardTitle>Add New Post</CardTitle>
    <CardDescription>To add a new post fill the form</CardDescription>
  </CardHeader>
  <CardContent>
  <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tite">Title</Label>
              <Input className = "bg-bgColor" id="title" required name = 'title' defaultValue = {postInfo?.title}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="body">Body</Label>
              <Textarea className = "bg-bgColor" required name = 'body' defaultValue = {postInfo?.body}/>
            </div>
            <Button className = "hover:bg-white hover:text-black">{postInfo? 'Update Post' : 'Add Post'}</Button>

          </div>
        </form>
  </CardContent>
</Card>
</div>
  )
}
export default PostForm
