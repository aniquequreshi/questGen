import { Formik, FieldArray, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import InputTextField from './FormsUI/InputTextField';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';


const initialValues = {
    choiceGroup: '',
    choiceItems: ['']
}

const validationSchema = Yup.object().shape({
    choiceGroup: Yup.string().required('You must enter a Group value'),
    choiceItems: Yup.array()
    .of(Yup.string().trim().required("Please enter a value for each Choice"))
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
                    
                    
                    <InputTextField name='choiceGroup' label='Group'/>
                    <ErrorMessage name='choiceGroup' />
                    
                    <FieldArray id ='choiceItems' name='choiceItems'>
                        {fieldArrayProps => {
                            const {push, remove, form} = fieldArrayProps
                            const {values} = form
                            const {choiceItems} = values

                            return <div>
                                
                                {choiceItems.map((choiceItem, index) => (
                                    <div key={index}>
                                        
                                        <InputTextField name={`choiceItems[${index}]`} label={`Choice ${index + 1}`} />
                                        {
                                            index >1 &&
                                            (<Button type='button' variant='contained' onClick={()=>remove(index)}>-</Button>)
                                        }
                                        <Button type='button' variant='contained' onClick={()=>push('')}>+</Button>

                                    </div>
                                ))}
                            </div>
                        }}
                    </FieldArray>
                    <ErrorMessage name='choiceItems' />
                    <div>
                        <Button type='submit' variant='contained' color='primary'>Save</Button>
                    </div>
                </Form>
            </Formik>

        </div>

    );
}
 
export default Choice;