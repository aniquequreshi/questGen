import { Formik, FieldArray, Form, Field } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    choiceGroup: '',
    choiceItems: ['']
}

const validationSchema = Yup.object({

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
                    <FieldArray id ='choiceItems' name='choiceItems'>
                        {fieldArrayProps => {
                            const {push, remove, form} = fieldArrayProps
                            const {values} = form
                            const {choiceItems} = values

                            return <div>
                                {choiceItems.map((choiceItem, index) => (
                                    <div key={index}>
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
                    <button type='submit'>Save</button>
                </Form>
            </Formik>

        </div>

    );
}
 
export default Choice;