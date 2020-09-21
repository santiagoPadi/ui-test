import { createStore, createTypedHooks } from 'easy-peasy'
import { persistStore, persistReducer } from 'redux-persist'
import { AlertModel, alert } from '../components/alert/AlertState'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const typedHooks = createTypedHooks<IModels>()

export interface IModels {
  alert: AlertModel
}

const Models = {
  alert,
}

const storeOptions = {
  reducerEnhancer: (reducer: any) =>
    persistReducer(
      {
        key: 'persistor',
        storage,
        stateReconciler: autoMergeLevel2,
      },
      reducer,
    ),
}

export const store = createStore(Models, storeOptions)

export const useStoreActions = typedHooks.useStoreActions

export const useStoreDispatch = typedHooks.useStoreDispatch

export const useStoreState = typedHooks.useStoreState
// @ts-ignore
export const persistor = persistStore(store)
