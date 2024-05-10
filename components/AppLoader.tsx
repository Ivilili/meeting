import Image from 'next/image';
import React from 'react'

export default function AppLoader() {
  return (
    <div className="flex-center h-screen w-full">
        <Image src="/icons/loading-circle.svg" alt="loading image" width={50} height={50} />
    </div>
  )
}