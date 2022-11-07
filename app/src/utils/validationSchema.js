import * as Yup from 'yup'

const required = "* Campo obligatorio"

export const validationSchema = Yup.object().shape({
    username: Yup.string().min(4, "Ingrese mas de 3 caracteres").required(required),
    name: Yup.string().min(4, "Ingrese mas de 3 caracteres").required(required),
    password: Yup.string().required(required),
})

export const validationSchemaLogin = Yup.object().shape({
    username: Yup.string().min(4, "Ingrese mas de 3 caracteres").required(required),
    password: Yup.string().required(required)
})

export const validationSchemaNote = Yup.object().shape({
    note: Yup.string().required(required)
})