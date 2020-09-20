import React from 'react'
import CloseIcon from '../../assets/CloseIcon'
import FooterTheme from './components/FooterTheme'
import RuleCard from './components/ruleCard'
import Ruling from './components/Rulings'
import RulingThemes from './data/rouling'
const bgpope = require('../../assets/pope.png')
const HomePage = () => {
  return (
    <div>
      <div
        className="flex flex-1 bg-center bg-no-repeat bg-cover justify-end flex-col h-screen"
        style={{
          backgroundImage: `url(${bgpope})`,
        }}
      >
        <RuleCard />
        <FooterTheme />
      </div>
      {/* Info Card */}
      <section key="info" className="px-ph py-5 mb-3">
        <div className="sm:flex items-center justify-between bg-gray p-5">
          <div>
            <p className="flex text-21 font-light" style={{ marginBottom: -14 }}>
              Speak out. be heard.
            </p>
            <p className="flex text-37 font-bold">Be counted</p>
          </div>
          <div>
            <p className="text-15 font-light">
              Rule of Thumb is croud sourced court of public opinion where anyone and everyone can speak out and speak freely. <br />
              It's easy: You share ypur opinion, we analyze and put the data in a public report.
            </p>
          </div>
          <div className="hidden sm:flex">
            <CloseIcon style={{ width: 25, height: 42 }} />
          </div>
        </div>
      </section>
      {/* Ruling Cards */}
      <h1 className="px-ph text-4xl font-light mb-2">Previous Rulings</h1>
      <section key="cards" className="px-ph sm:flex flex-wrap justify-between">
        {RulingThemes.map((ruling, index) => {
          return <Ruling key={index} id={index} {...ruling} />
        })}
      </section>
    </div>
  )
}
export default HomePage
