import {Action, Reducer} from 'redux';

export enum Types {
  TRY_LOAD_USER = 'TRY_LOAD_USER',
  LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS',
  LOAD_USER_FAILED = 'LOAD_USER_FAILED',
}

type State = {
  userName: string;
  userAge: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  loading: boolean;
  hasError: boolean;
};

const INITIAL_STATE: State = {
  email: '',
  location: '',
  phone: '',
  userAge: '',
  userName: '',
  avatar: '',
  loading: false,
  hasError: false,
};

interface DispatchAction extends Action {
  payload: {
    user: State;
  };
}

export const UserReducer: Reducer<State, DispatchAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case Types.LOAD_USER_SUCCESS:
      return {
        ...state,
        userName: action.payload.user.userName,
        userAge: action.payload.user.userAge,
        location: action.payload.user.location,
        phone: action.payload.user.phone,
        email: action.payload.user.email,
        avatar: action.payload.user.avatar,
        loading: false,
      };
    case Types.LOAD_USER_FAILED:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    case Types.TRY_LOAD_USER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export function tryLoadUser() {
  return {
    type: Types.TRY_LOAD_USER,
  };
}

export type User = {
  userName: string;
  userAge: string;
  location: string;
  email: string;
  avatar: string;
  phone: string;
};

export type loadUserSuccess = typeof loadUserSuccess;

export function loadUserSuccess(user: User) {
  return {
    type: Types.LOAD_USER_SUCCESS,
    payload: {
      user,
    },
  };
}

export function loadUserFailed() {
  return {
    type: Types.LOAD_USER_FAILED,
  };
}

export interface UserState {
  user: State;
}
