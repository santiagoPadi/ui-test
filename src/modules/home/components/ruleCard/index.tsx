import React from 'react'
import CheckHandIcon from '../../../../assets/CheckHand'
import WikiIcon from '../../../../assets/Wiki'
const RuleCard = () => {
  return (
    <section>
      <article className="widget sm:w-45 p-5 sm:p-10 text-15 sm:text-21">
        <p className="font-light text-15" style={{ marginBottom: -15 }}>
          What's your opinion on
        </p>
        <h1 className="text-37 sm:text-60 font-medium">Pope Francis?</h1>
        <p className="font-medium w-11/12 mb-5">
          He's talking tougth on clergy sexual abuse, but
          {/* break */} is he just another papal pervert protector? {/* break */}(thumbs down) or a true pedophile punishing pontiff? (thumbs up)
        </p>
        <div className="flex items-center mb-10">
          <WikiIcon /> <span className="underline ml-3 text-15 ">More information</span>
        </div>
        <p className="font-bold">What's Your Veredict?</p>
      </article>
      <div className="widget-sub flex">
        <div className="w-full cursor-pointer centered bg-blue bg-opacity-75">
          <CheckHandIcon />
        </div>
        <div className="w-full cursor-pointer centered bg-yellow bg-opacity-75">
          <CheckHandIcon className="transform rotate-180" />
        </div>
      </div>
    </section>
  )
}

export default RuleCard
