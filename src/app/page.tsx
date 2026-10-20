import React from 'react'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <div>Welcome Home</div>
    <Link href="/blog">Blog</Link><br />
    <Link href="/products">Products</Link>
    </>
    
    
  )
}
