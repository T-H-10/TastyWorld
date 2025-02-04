import { initialUserState, PartialUserType, UserType } from "../../types/userTypes"

export const routerURLUser = "http://localhost:3000/api/user/";

export type Action = {
    type: 'ADD_USER' | 'LOGIN_USER',
    data: PartialUserType
} | {
    type: 'UPDATE_USER',
    data: Partial<UserType>,
} | {
    type: 'DELETE_USER'
} | {
    type: 'GET_USER'
}

export default (state: UserType, action: Action): UserType => {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, ...action.data };
        case 'LOGIN_USER':
            return { ...state, ...action.data };
        case 'DELETE_USER':
            return initialUserState;
        case 'UPDATE_USER':
            return {...state, ...action.data }
        case "GET_USER":
            return state;
        default:
            return state;
    }
}