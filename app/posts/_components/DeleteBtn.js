'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteBtn =  ({ id }) => {
    const router = useRouter()
    const handleDelete = async () => {
        try { 
            if(!confirm('Are you sure you want to delete')) return

            const response = await fetch(`http://localhost:3000/api/post/${id}`, {
            method: 'DELETE'  })
            response.ok? toast.success("Post Deleted") : toast.error('Failed to delete')
            router.push('/posts')
            router.refresh()
        } catch (err) {
            console.error(err)
        }
    }

  return (
    <div>
        <RiDeleteBin6Line className=" text-red-600 cursor-pointer text-lg" onClick={handleDelete}/>
    </div>
  )
}

export default DeleteBtn