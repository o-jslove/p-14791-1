'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res.posts))
  }, [])
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            className="p-1 rounded hover:bg-gray-200"
            href={`/posts/${post.id}`}
          >
            {post.id}. {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
