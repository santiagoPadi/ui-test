import React from 'react'
import CheckHandIcon from '../../../../assets/CheckHand'
interface IRuling {
  id: number
  title: string
  subtitle: string
  time: string
  section: string
  url: string
}
const Ruling = ({ id, title, subtitle, time, section, url }: IRuling) => {
  let currentX = 0
  let currentY = 0
  let movementConstant = 0.01
  function handleCursor(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (currentX === 0 && currentY === 0) {
      currentX = e.pageX
      currentY = e.pageY
    }
    const cursor = document.getElementById(`Parallax-container-${id}`)
    let xdiff = e.pageX - currentX
    let ydiff = e.pageY - currentY
    if (cursor) cursor.setAttribute('style', 'top:' + ydiff * movementConstant + 'px; left:' + xdiff * movementConstant + 'px;')
  }

  return (
    <div
      className="w-full custom-background flex flex-col justify-end sm:w-49 h-550 mb-5"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div onMouseMove={handleCursor} id={`${id}`} className="w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-op-black">
        <div className="flex h-full relative justify-end">
          <div id={`Parallax-container-${id}`} className="w-full flex  h-full absolute justify-center items-end text-white">
            <div className="w-full flex justify-between sm:justify-center">
              <div className="w-1/12 h-full mt-3 ">
                <div className="h-8 w-8 bg-blue centered">
                  <CheckHandIcon className="w-smIcon h-smIcon" />
                </div>
              </div>
              <div className="w-8/12 flex flex-col justify-start items-end pr-2 sm:pr-0 sm:items-start  mb-5">
                <h3 className=" font-semibold text-3xl mb-1 text-right sm:text-left">{title}</h3>
                <p className="mb-5 text-right sm:text-left">{subtitle}</p>
                <button className="border px-5 py-1 sm:text-lg font-semibold">View Full Report</button>
              </div>
              <div className="w-3/12 hidden flex-col justify-end items-end text-sm pr-3 mb-5 sm:flex">
                <p className="font-semibold">{time}</p>
                <p>{`in ${section}`}</p>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="w-full h-50 self-end justify-self-end flex">
          <div className="w-2/6 bg-blue bg-opacity-75 flex items-center justify-end pr-1"></div>
          <div className="w-4/6 bg-yellow bg-opacity-75 flex items-center justify-start pl-2"></div>
        </div>
      </div>
    </div>
  )
}
export default Ruling
