"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const router = useRouter()
  return (
    <div className='flex flex-row gap-2 '>
      <button className="btn btn-primary" onClick={() => router.push('/check')}>checkbox</button>
      <button className="btn btn-primary" onClick={() => router.push('/timer')}>Timer</button>
      <button className="btn btn-primary" onClick={() => router.push('/nestedobj')}>Nested Obj</button>
    </div>
  );
}

export default Page
