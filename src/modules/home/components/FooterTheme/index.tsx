import moment from 'moment'
import React from 'react'
const FooterTheme = () => {
  const currentlyDays = Math.ceil((moment().date() / 30) * 10)
  const lackDays = 10 - currentlyDays

  return (
    <div className="w-full h-50 self-end  flex">
      <div className={`w-${1 + currentlyDays}/12 bg-black bg-opacity-25 flex items-center justify-end pr-1`}>
        <p className="text-white text-right font-bold text-xs">CLOSING IN </p>
      </div>
      <div className={`w-${1 + lackDays}/12 bg-white bg-opacity-75 flex items-center justify-start pl-2`}>
        <p className="text-black text-right font-semibold text-3xl mb-1">
          {30 - moment().date()}
          <span className="font-light"> days</span>
        </p>
      </div>
    </div>
  )
}

export default FooterTheme
