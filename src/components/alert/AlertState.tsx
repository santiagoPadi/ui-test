import { action, Action } from 'easy-peasy'

export type alertType = 'danger' | 'warning' | 'success'

export interface AlertModel {
  alert: string | null
  type: alertType
  removeAlert: Action<AlertModel>
  showAlert: Action<AlertModel, { message: string | null; type: alertType }>
}

export const alert: AlertModel = {
  alert: null,
  type: 'danger',
  removeAlert: action(state => {
    state.alert = null
  }),
  showAlert: action((state, { message, type }) => {
    state.alert = message
    state.type = type
  }),
}
