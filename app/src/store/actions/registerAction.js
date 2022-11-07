import { postRegisterFetch } from '../../services/register'

export const registerSuccess = data => ({
    type: "REGISTER_SUCCESS",
    payload: data
})

export const registerFailure = error => ({
    type: "REGISTER_FAILURE",
    payload: error
})

export const switchRegister = () => ({
    type: "REGISTER_NULL"
})

export const postRegister = (values) => dispatch => {
    postRegisterFetch(values)
        .then(data => {
            if (data.status_code === 201) {
                dispatch(registerSuccess(data.user))
            } else {
                dispatch(registerFailure())
            }
        })
}