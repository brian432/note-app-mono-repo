import { Formik, Form, Field } from "formik"
import { validationSchemaNote } from "../../utils/validationSchema"

export const CreateNotes = ({ createNote }) => {
    return (
        <div className='createNotes'>
            <Formik
                initialValues={{ note: "" }}
                validationSchema={validationSchemaNote}
                onSubmit={({note}) => {
                    createNote(note)
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <h1>Crear nota</h1>
                        <div>
                            <Field name="note" placeholder="Crea una nueva nota..." />
                            {errors.note && touched.note && <span className="primaryColor">{errors.note}</span>}
                        </div>
                        <div>
                            <button type="submit">Guardar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}