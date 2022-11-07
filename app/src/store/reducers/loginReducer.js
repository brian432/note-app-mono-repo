const initialState = {
    login: null,
    notes:[]
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            localStorage.setItem("LoggedAppUser", action.payload.token)
            return {
                ...state,
                login: true,
                notes:action.payload.notes
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                login: false
            }
        case "LOGIN_INCORRECT":
            return {
                login: null
            }
        case "LOGOUT":
            localStorage.removeItem("LoggedAppUser")
            return {
                login: null
            }
        default:
            return state
    }
}