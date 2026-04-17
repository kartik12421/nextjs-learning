import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex justify-between px-10 bg-slate-800 text-white py-4'>
      <div className="logo font-bold">MyBook</div>
      <ul className='flex gap-6'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/contact'><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
