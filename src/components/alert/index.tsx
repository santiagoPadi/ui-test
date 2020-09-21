import * as React from 'react'
import { useStoreState, useStoreActions } from '../../state'
import SmartAlert from './alert'

const Alert = () => {
  const label = React.useRef<HTMLLabelElement>(null)

  const { alert, type } = useStoreState(state => state.alert)

  const { removeAlert } = useStoreActions(actions => actions.alert)

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

  return alert ? <SmartAlert {...{ removeAlert, type, alert }} /> : <div />
}

export default Alert
