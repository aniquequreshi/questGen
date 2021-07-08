import { Formik, FieldArray, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import InputTextField from './FormsUI/InputTextField';
import { Container, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles({
    paper: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

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
    const classes = useStyles()

    return (
        <div>
            <Formik
                initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}

            >
                <Form>
                    <Container maxWidth='sm'>
                    <Grid container spacing ={1}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                            <InputTextField name='choiceGroup' label='Group'/>
                            </Paper>
                        </Grid>    
                        </Grid>    

                  
                            <FieldArray id ='choiceItems' name='choiceItems'>
                                {fieldArrayProps => {
                                    const {push, remove, form} = fieldArrayProps
                                    const {values} = form
                                    const {choiceItems} = values

                                    return <div>
                                        <Grid container spacing={2}>
                                            {choiceItems.map((choiceItem, index) => (
                                                <Grid item key={index} sm={12}>
                                                    <Paper  variant='outlined' >
                                                        <InputTextField name={`choiceItems[${index}]`} label={`Choice ${index + 1}`} />
                                                        {
                                                            index >1 &&
                                                            (<Button type='button' variant='contained' onClick={()=>remove(index)}>-</Button>)
                                                        }
                                                        <Button type='button' variant='contained' onClick={()=>push('')}>+</Button>
                                                    </Paper>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </div>
                                }}
                            </FieldArray>
                        
                        <div>
                            <Button type='submit' variant='contained' color='primary'>Save</Button>
                        </div>
                    </Container>
                </Form>
            </Formik>

        </div>

    );
}
 
export default Choice;