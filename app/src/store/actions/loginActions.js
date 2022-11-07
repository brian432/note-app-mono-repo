import { loginFetch } from "../../services/login"

export const loginSuccess = data => ({
    type: "LOGIN_SUCCESS",
    payload: data
})

export const loginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const logout = () => ({
    type: "LOGOUT"
})

export const loginIncorrect = () => ({
    type: "LOGIN_INCORRECT"
})

export const postLogin = (values) => dispatch => {
    loginFetch(values)
        .then(data => {
            if (data.status_code === 200) {
                dispatch(loginSuccess(data.user))
            } else {
                dispatch(loginFailure())
            }
        })
}