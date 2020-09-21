import * as React from 'react'
import Danger from '../../assets/danger'
import Success from '../../assets/success'
import Warning from '../../assets/warning'
import './alert.css'

export type alertType = 'danger' | 'warning' | 'success'
interface AlertProps {
  removeAlert: any
  type: alertType
  alert: string | null
  index?: number
}

export default function SmartAlert({ removeAlert, type, alert, index = 0 }: AlertProps) {
  const label = React.useRef<HTMLLabelElement>(null)

  React.useEffect(() => {
    let timeOut = setTimeout(() => {
      if (label && label.current && alert) {
        label.current.click()
      }
    }, 8000)

    return () => {
      clearTimeout(timeOut)
    }
  }, [alert])

  return alert ? (
    <div className="alert-toggle" style={{ top: index * 80 }}>
      <input type="checkbox" className="hidden" id="banneralert" />

      <label ref={label} className={`label-close-toggle`} title="close" onClick={() => removeAlert()} htmlFor="banneralert">
        {type === 'success' && <Success />}
        {type === 'danger' && <Danger />}
        {type === 'warning' && <Warning />}
        <div style={{ width: 12, height: 40 }} />
        <div dangerouslySetInnerHTML={{ __html: alert }} />
      </label>
    </div>
  ) : (
    <div />
  )
}

//export default
