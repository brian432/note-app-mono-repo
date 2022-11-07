const initialValues = {
    data: [],
    register: null
}

export const registerReducer = (state = initialValues, action) => {
    switch (action.type) {
        case "REGISTER_SUCCESS":
            return {
                ...state,
                register: true
            }
        case "REGISTER_FAILURE":
            return {
                ...state,
                register: false
            }
        case "REGISTER_NULL":
            return {
                ...state,
                register: null
            }
        default:
            return state
    }
}