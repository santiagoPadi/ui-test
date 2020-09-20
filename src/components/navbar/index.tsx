import React, { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import MenuIcon from '../../assets/MenuIcon'
import SearchIcon from '../../assets/search'
const options: string[] = ['Past Trials', 'How it Works', 'log in/Sign Up']
const Navbar = () => {
  const [drop, setDrop] = useState<boolean>(false)
  const ref = useRef(null)
  useClickAway(ref, () => {
    setDrop(false)
  })
  return (
    <div
      className={`w-full  absolute top-0 bg-opacity-100 bg-gradient-to-b from-op-black to-transparent px-ph centered text-white ${
        drop ? 'flex-col items-start justify-start pt-6' : 'h-100'
      }`}
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <div className="w-full text-3xl">Rule of Thumb.</div>
      <div className={`w-full  justify-between  sm:visible sm:flex ${drop ? '' : 'invisible  hidden'} `} ref={ref}>
        {options.map(op => (
          <p className="cursor-pointer text-sm my-2 sm:my-0 hover:font-semibold hover:underline">{op}</p>
        ))}
        <SearchIcon className="cursor-pointer" />
      </div>
      <MenuIcon onClick={() => setDrop(!drop)} className={`w-icon h-icon sm:invisible ${drop && 'invisible'}`} />
    </div>
  )
}

export default Navbar
