import { api } from '../../services/api'
import { IAuthorInfo } from '../interfaces/IAuthorInfo'
import { BlogActionTypes } from './actions'

export interface IBlogState {
  authorInfo: IAuthorInfo
}

interface IBlogAction {
  type: BlogActionTypes
  payload: IBlogState
}

export function blogReducer(state: IBlogState, action: IBlogAction) {
  switch (action.type) {
    case BlogActionTypes.INITIALIZE_STATE: {
      return action.payload
    }
    default:
      return state
  }
}

export async function initializerState(): Promise<IBlogState> {
  try {
    const response = await api.get<IAuthorInfo>('/users/diogomfc')
    const { data } = response
    return {
      authorInfo: data,
    }
  } catch (error) {
    console.log(error)
    return {} as IBlogState
  }
}
