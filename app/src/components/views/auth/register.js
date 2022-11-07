import { Link, useNavigate } from "react-router-dom"

import { Formik, Form, Field } from "formik"
import { validationSchema } from "../../../utils/validationSchema"
import { swalRegisterFalse, swalRegisterSuccess } from "../../../utils/swal"
import { useSelector, useDispatch } from 'react-redux'

import { postRegister, switchRegister } from "../../../store/actions/registerAction"
import { useEffect } from "react"

export const Register = () => {
    const { register } = useSelector(state => state.registerReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (register) {
            swalRegisterSuccess()
            dispatch(switchRegister())
            navigate('/login', { replace: true })

        } else if (register === false) {
            swalRegisterFalse()
            dispatch(switchRegister())
        }
    }, [register])

    const initialValues = {
        username: "",
        name: "",
        password: ""
    }
    return (
        <div className="auth">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    dispatch(postRegister(values))
                    resetForm()
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <h1>Registro</h1>
                        <div>
                            <label>Nombre de usuario</label>
                            <Field name="username" placeholder="Nombre de usuario..." />
                            {errors.username && touched.username && <span className="primaryColor">{errors.username}</span>}
                        </div>
                        <div>
                            <label>Nombre</label>
                            <Field name="name" placeholder="Nombre..." />
                            {errors.name && touched.name && <span className="primaryColor">{errors.name}</span>}
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Contraseña..."
                            />
                            {errors.password && touched.password && <span className="primaryColor">{errors.password}</span>}
                        </div>
                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                        <div>
                            <Link to="/login">Ir a iniciar sesion</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}