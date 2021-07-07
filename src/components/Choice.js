import { Formik, FieldArray, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
    choiceGroup: '',
    choiceItems: ['']
}

const validationSchema = yup.object().shape({
    choiceGroup: yup.string().required('You must enter a Group value'),
    choiceItems: yup.array()
    .of(yup.string().trim().required("Please enter a value for each Choice"))
    .min(2,'At least two choices must be entered')
    
    //,
})

const onSubmit = values => {

}



const Choice = () => {
    return (
        <div>
            <Formik
                initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}

            >
                <Form>
                    <label>Group</label>
                    <Field type='text' id='choiceGroup' name='choiceGroup' />
                    <ErrorMessage name='choiceGroup' />
                    
                    <FieldArray id ='choiceItems' name='choiceItems'>
                        {fieldArrayProps => {
                            const {push, remove, form} = fieldArrayProps
                            const {values} = form
                            const {choiceItems} = values

                            return <div>
                                {choiceItems.map((choiceItem, index) => (
                                    <div key={index}>
                                        <label>Choice {index + 1}</label>
                                        <Field name={`choiceItems[${index}]`} />
                                        {
                                            index >1 &&
                                            (<button type='button' onClick={()=>remove(index)}>-</button>)
                                        }
                                        <button type='button' onClick={()=>push('')}>+</button>

                                    </div>
                                ))}
                            </div>
                        }}
                    </FieldArray>
                    <ErrorMessage name='choiceItems' />
                    <button type='submit'>Save</button>
                </Form>
            </Formik>

        </div>

    );
}
 
export default Choice;