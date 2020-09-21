import React from 'react'
import capitalize from '../../helpers'
const CustomNav = () => {
  const route: string = window.location.pathname
    .replace(/\//, '')
    .replace(/\//g, '.')
    .split('.')[0]
  return (
    <div className="w-full h-screen self-end centered">
      <p className="text-5xl">{route !== undefined ? capitalize(route).replace(/-/g, ' ') : ''}</p>
    </div>
  )
}

export default CustomNav
