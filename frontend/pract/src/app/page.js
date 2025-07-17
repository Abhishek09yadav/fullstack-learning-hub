"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const router = useRouter()

  return (
    <div className='grid grid-cols-2 justify-center items-center md:grid-cols-5 gap-2 m-4'>
      <button className="btn btn-primary" onClick={() => router.push('/check')}>checkbox</button>
      <button className="btn btn-primary" onClick={() => router.push('/timer')}>Timer</button>
      <button className="btn btn-primary" onClick={() => router.push('/nestedobj')}>Nested Obj</button>
      <button className="btn btn-primary" onClick={() => router.push('/inputRef')}>Input Ref</button>
    </div>
  );
}

export default Page
