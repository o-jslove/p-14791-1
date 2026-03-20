'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function PostList() {
  const { id } = useParams()
  const [post, setPost] = useState({})
  return <>{id}번 게시글 상세</>
}
