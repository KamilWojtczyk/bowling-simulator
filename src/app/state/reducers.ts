import { ActionReducerMap } from '@ngrx/store'
import { State } from './store'
import { routerReducer } from '@ngrx/router-store'

export namespace RootReducer {
    export const reducer: ActionReducerMap<State> = {
        router: routerReducer,
    }
}