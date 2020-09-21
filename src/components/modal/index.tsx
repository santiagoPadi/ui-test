import * as React from 'react'
import ReactDOM from 'react-dom'
import { useClickAway } from 'react-use'

export function useLockBodyScroll() {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])
}

interface ModalProps {
  title?: string
  visible: boolean
  onCancel: () => void
  children?: any
}

const Modal = ({ onCancel, visible, children }: ModalProps) => {
  const ref = React.useRef(null)

  useClickAway(ref, () => {
    onCancel()
  })

  if (!visible) {
    return null
  }
  return ReactDOM.createPortal(
    <div className={` bg-black bg-opacity-75 fixed w-full h-full top-0 left-0 flex items-center justify-center z-10`}>
      <div ref={ref} className=" w-9/12  mx2-auto border-1 boder-gray-400 shadow-lg z-50 overflow-hiden p-8" style={{ height: 500 }}>
        <div className="mt-4 centered">{children}</div>
      </div>
    </div>,
    document.body,
  )
}

export default Modal
