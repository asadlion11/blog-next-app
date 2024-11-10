import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'
import { FaRegEdit } from "react-icons/fa";
import DeleteBtn from './DeleteBtn';

const List = async () => {
  const posts = await fetch(`http://localhost:3000/api/post`, {cache: "no-store"})
  const postsData = await posts.json()
  return (
    <div>
      <Table>
        <TableCaption>All Posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className = " text-gray-300">Id</TableHead>
            <TableHead className = " text-gray-300">Title</TableHead>
            <TableHead className = " text-gray-300">Body</TableHead>
            <TableHead className = " text-gray-300">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {postsData.map(post => (
            <TableRow key ={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.body}</TableCell>
            <Link href={`/posts/${post.id}`}><TableCell className=" text-cyan-600 hover:text-white cursor-pointer text-lg"><FaRegEdit /></TableCell></Link>
           <TableCell><DeleteBtn id = {post.id} /></TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default List
