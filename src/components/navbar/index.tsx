import React, { useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useClickAway } from 'react-use'
import MenuIcon from '../../assets/MenuIcon'
import SearchIcon from '../../assets/search'
const Navbar = () => {
  const { push } = useHistory()
  const { pathname } = useLocation()
  const [drop, setDrop] = useState<boolean>(false)
  const ref = useRef(null)
  useClickAway(ref, () => {
    setDrop(false)
  })
  const scrolling = () => {
    if (pathname !== '/') {
      push('/')
    }
    window.scrollBy(0, window.innerHeight + 150) //x y
  }
  return (
    <div
      className={`w-full  absolute top-0 bg-opacity-100 bg-gradient-to-b from-op-black to-transparent px-ph centered text-white ${
        drop ? 'flex-col items-start justify-start pt-6' : 'h-100'
      }`}
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <div onClick={() => push('/')} className="w-full text-3xl cursor-pointer hover:text-4xl">
        Rule of Thumb.
      </div>
      <div className={`w-full  justify-between  sm:visible sm:flex ${drop ? '' : 'invisible  hidden'} `} ref={ref}>
        <p onClick={() => scrolling()} className="cursor-pointer text-sm my-2 sm:my-0 hover:font-semibold hover:underline">
          Past Trials
        </p>
        <p onClick={() => push('/how-works')} className="cursor-pointer text-sm my-2 sm:my-0 hover:font-semibold hover:underline">
          How it Works
        </p>
        <p onClick={() => push('/login')} className="cursor-pointer text-sm my-2 sm:my-0 hover:font-semibold hover:underline">
          log in/Sign Up
        </p>
        <SearchIcon className="cursor-pointer" />
      </div>
      <MenuIcon onClick={() => setDrop(!drop)} className={`w-icon h-icon sm:invisible ${drop && 'invisible'}`} />
    </div>
  )
}

export default Navbar
