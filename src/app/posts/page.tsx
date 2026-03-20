'use client'

import { useState } from 'react'

export default function Posts() {
  const [state, setState] = useState([])
  return (
    <ul>
      <li>게시글 1</li>
      <li>게시글 2</li>
      <li>게시글 3</li>
    </ul>
  )
}
