import { IBlogState } from './reducer';

export enum BlogActionTypes {
  'INITIALIZE_STATE' = 'INITIALIZE_STATE'
}

export const initializeAction = (payload: IBlogState) => ({ type: BlogActionTypes.INITIALIZE_STATE, payload })
