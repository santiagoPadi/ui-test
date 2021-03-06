import React from 'react'
import { useHistory } from 'react-router-dom'
import FacebookIcon from '../../assets/facebook'
import TwitterIcon from '../../assets/twitter'
const anyoneImage = require('../../assets/anyoneElse.png')

const Footer = () => {
  const { push } = useHistory()
  const info = [
    { name: 'Terms and Conditions', route: '/terms' },
    { name: 'Privacy Policy', route: '/privacy' },
    { name: 'Contact Us', route: '/contact' },
  ]
  return (
    <section className={`w-full px-ph mb-20`}>
      <div
        className="w-full sm:h-80 custom-background "
        style={{
          backgroundImage: `url(${anyoneImage})`,
        }}
      >
        <div className="w-full h-full bg-white bg-opacity-75 flex flex-col text-center sm:text-left sm:flex-row items-center justify-center sm:justify-between px-10 py-2">
          <p className=" mb-4 sm:mb-0">Is there anyone else you would want us to add?</p>
          <button onClick={() => push('submit-name')} className=" border-2 border-black px-6 py-2">
            Submit a Name
          </button>
        </div>
      </div>
      {/* separator */}
      <div className="w-full border-t border-gray border-dotted mt-6 mb-4" />
      {/* info footer */}
      <footer className="sm:flex font-light text-gray-300">
        <div className="w-full sm:flex justify-start">
          {info.map(i => (
            <p key={i.name} className="mr-4" onClick={() => push(i.route)}>
              {i.name}
            </p>
          ))}
        </div>
        <div className="w-full flex sm:justify-end">
          <p>Follow us</p>
          <a target="_blank" href="https://www.facebook.com/santiago.pachondiaz">
            <FacebookIcon className="ml-2 cursor-pointer" />
          </a>
          <a target="_blank" href="https://twitter.com/santipachon">
            <TwitterIcon className="ml-2 cursor-pointer" />
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Footer
