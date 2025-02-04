export type UserType = {
    id: number
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    tel: string
}

export type PartialUserType = {
    firstName: string
    lastName: string
    address: string
    tel: string
    id: number,
    email: string,
    password: string
}
export const initialUserState: UserType = {
    id: 0, email: '', password: '',
    firstName: '',
    lastName: '',
    address: '',
    tel: ''
};
export type statusType = "login" | "register" | null

