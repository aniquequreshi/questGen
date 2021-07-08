import { Formik, FieldArray, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import InputTextField from './FormsUI/InputTextField';
import { CardHeader, Container, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, CardContent, CardActions } from '@material-ui/core';
import { teal } from '@material-ui/core/colors/';
import '@fontsource/roboto';


const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '100px'
    },
    paper: {
        //backgroundColor: theme.palette.success.light,
        backgroundColor: teal[200],
        color: theme.palette.getContrastText(teal[200]),
        margin: '10px',
        // justifyContent: 'center',
        display: 'flex'

    },
    card: {
        marginTop: theme.spacing(2),
        backgroundColor: teal[200],
        color: theme.palette.getContrastText(teal[200])        
    },
    inputTextField: {
        backgroundColor: teal[100],
        color: theme.palette.getContrastText(teal[100])        
    },

  }));

const initialValues = {
    choiceGroup: '',
    choiceItems: ['', '']
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
                        <Card className={classes.card} >
                            <CardHeader title='Choices' />
                            <CardContent>
                                    <InputTextField name='choiceGroup' className={classes.inputTextField} label='Group Name'/>
                            </CardContent>
                        </Card>

                        <FieldArray id ='choiceItems' name='choiceItems'>
                            {fieldArrayProps => {
                                const {push, remove, form} = fieldArrayProps
                                const {values} = form
                                const {choiceItems} = values

                                return <div>
                                    
                                    <Grid container 
                                        spacing={0}
                                        classes= {classes.grid}
                                        //alignItems='center'
                                        //direction = 'column'    
                                    >
                                        {choiceItems.map((choiceItem, index) => (
                                            <Grid item key={index} sm={12}>
                                                <Paper className={classes.paper}>
                                                    <InputTextField className={classes.inputTextField} name={`choiceItems[${index}]`} label={`Choice ${index + 1}`} />
                                                        {
                                                            index >1 &&
                                                            (<Button type='button' variant='outlined' color= 'secondary' onClick={()=>remove(index)}>-</Button>)
                                                        }
                                                        {
                                                            index > 0 &&
                                                            (<Button type='button' variant='outlined' color='primary' onClick={()=>push('')}>+</Button>)
                                                        }
                                                </Paper>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            }}
                        </FieldArray>
                        
                        <Paper className={classes.paper}>
                            <Button type='submit' variant='outlined' fullWidth={true}>
                                <Typography variant='h6'>
                                    Save
                                </Typography>
                            </Button>
                        </Paper>
                        
                    </Container>
                </Form>
            </Formik>

        </div>

    );
}
 
export default Choice;