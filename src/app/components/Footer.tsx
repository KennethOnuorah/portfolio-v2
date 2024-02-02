import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='flex flex-col justify-center items-center bg-black text-white px-12 py-2 sm:flex-row sm:justify-between sm:items-start'>
        <div>
          Created by Kenneth Onuorah
        </div>
        <div>
          Copyright &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
