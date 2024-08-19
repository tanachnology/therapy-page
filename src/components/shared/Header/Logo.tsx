import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="">
      <Image 
        src="/nuevoLogo.png"
        alt="Logo"
        width={100}
        height={100}
      />
    </div>
  )
}

export default Logo
