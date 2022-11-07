import { Link, useNavigate } from "react-router-dom"
import { Formik, Form, Field } from "formik"
import { validationSchemaLogin } from "../../../utils/validationSchema"
import { loginIncorrect, postLogin } from "../../../store/actions/loginActions"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { swalLoginFailure } from "../../../utils/swal"

export const Login = () => {
    const { login } = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (login === true) {
            navigate("/", { replace: true })
        } else if (login === false) {
            swalLoginFailure()
            dispatch(loginIncorrect())
        }
    }, [login])

    const initialValues = {
        username: "",
        password: ""
    }
    return (
        <div className="auth">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaLogin}
                onSubmit={(values) => {
                    dispatch(postLogin(values))
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <h1>Iniciar sesión</h1>
                        <div>
                            <label>Nombre de usuario</label>
                            <Field name="username" placeholder="Nombre de usuario..." />
                            {errors.username && touched.username && <span className="primaryColor">{errors.username}</span>}
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <Field name="password" type="password" placeholder="Contraseña..." />
                            {errors.password && touched.password && <span className="primaryColor">{errors.password}</span>}
                        </div>
                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                        <div>
                            <Link to="/register">Ir a registrarse</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}