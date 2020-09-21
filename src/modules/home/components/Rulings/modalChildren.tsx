import React, { useState } from 'react'
import CheckHandIcon from '../../../../assets/CheckHand'
import Modal from '../../../../components/modal'
import { calculate } from './controllers'
interface IRuling {
  id: number
  title: string
  subtitle: string
  time: string
  section: string
  url: string
}

const Ruling = ({ id, title, subtitle, time, section, url }: IRuling) => {
  const { likes, dislikes } = calculate(id)
  // let currentX = 0
  // let currentY = 0
  // let movementConstant = 0.01
  // function handleCursor(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  //   if (currentX === 0 && currentY === 0) {
  //     currentX = e.pageX
  //     currentY = e.pageY
  //   }
  //   const cursor = document.getElementById(`Parallax-container-${id}`)
  //   let xdiff = e.pageX - currentX
  //   let ydiff = e.pageY - currentY
  //   if (cursor) cursor.setAttribute('style', 'top:' + ydiff * movementConstant + 'px; left:' + xdiff * movementConstant + 'px;')
  // }
  const rulingStatus = likes.percent > dislikes.percent
  const [visible, setvisible] = useState(false)
  return (
    <div
      className="w-full custom-background flex flex-col justify-end sm:w-49 max-w-2xl h-550 mb-5"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div
        // onMouseMove={handleCursor}
        id={`${id}`}
        className="w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-op-black"
      >
        <Modal visible={visible} onCancel={() => setvisible(false)}>
          <div
            className="w-1/2 max-w-xl h-500 rounded custom-background flex text-white"
            style={{
              backgroundImage: `url(${url})`,
            }}
          >
            <div className="w-full flex justify-between sm:justify-center items-end bg-gradient-to-b from-transparent to-op-black">
              <div className="w-1/12 h-full ">
                <div className={`h-8 w-8 ${rulingStatus ? 'bg-blue' : 'bg-yellow'} centered`}>
                  <CheckHandIcon className={`w-smIcon h-smIcon ${!rulingStatus && 'transform rotate-180'}`} />
                </div>
              </div>
              <div className="w-8/12 flex flex-col justify-start items-end pr-2 sm:pr-0 sm:items-start  ">
                <h3 className=" font-semibold text-3xl mb-1 text-right sm:text-left">{title}</h3>
                <p className="mb-5 text-right sm:text-left">{subtitle}</p>
              </div>
              <div className="w-3/12 hidden flex-col justify-end items-end text-sm pr-3 mb-5 sm:flex">
                <p className="font-semibold">{time}</p>
              </div>
            </div>
          </div>
        </Modal>
        <div className="flex h-full relative justify-end">
          <div id={`Parallax-container-${id}`} className="w-full flex z-10  h-full absolute justify-center items-end text-white">
            <div className="w-full flex justify-between sm:justify-center">
              <div className="w-1/12 h-full mt-3 ">
                <div className={`h-8 w-8 ${rulingStatus ? 'bg-blue' : 'bg-yellow'} centered`}>
                  <CheckHandIcon className={`w-smIcon h-smIcon ${!rulingStatus && 'transform rotate-180'}`} />
                </div>
              </div>
              <div className="w-8/12 flex flex-col justify-start items-end pr-2 sm:pr-0 sm:items-start  mb-5">
                <h3 className=" font-semibold text-3xl mb-1 text-right sm:text-left">{title}</h3>
                <p className="mb-5 text-right sm:text-left">{subtitle}</p>
                <button onClick={() => setvisible(true)} className="border px-5 py-1 sm:text-lg font-semibold">
                  View Full Report
                </button>
              </div>
              <div className="w-3/12 hidden flex-col justify-end items-end text-sm pr-3 mb-5 sm:flex">
                <p className="font-semibold">{time}</p>
                <p>{`in ${section}`}</p>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="w-full h-50 self-end justify-self-end flex text-white text-3xl font-light">
          <div className={`${likes.percent === 0 ? 'w-full' : `w-${1 + likes.width}/12`} bg-blue bg-opacity-75 flex items-center justify-start pl-1`}>
            <CheckHandIcon />
            <p className="hidden sm:flex ml-2">{likes.percent}%</p>
          </div>
          <div
            className={`${
              dislikes.percent === 0 ? 'w-full' : `w-${1 + dislikes.width}/12`
            } bg-yellow bg-opacity-75 flex items-center justify-end pr-2`}
          >
            <p className="hidden sm:flex">{dislikes.percent}%</p>
            <CheckHandIcon className="transform rotate-180 ml-1" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Ruling
