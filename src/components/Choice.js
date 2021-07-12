import { Formik, FieldArray, Form } from 'formik';
import * as Yup from 'yup';
// import Typography from '@material-ui/core/Typography';
import InputTextField from './FormsUI/InputTextField';
//import { CardHeader, Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, CardContent} from '@material-ui/core';
import { teal } from '@material-ui/core/colors/';
import '@fontsource/roboto';
import { projectFirestore } from './fireConfig';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    grid: {
        backgroundColor: teal[200],
        color: theme.palette.getContrastText(teal[200])
    },
    paper: {
        //backgroundColor: theme.palette.success.light,
        backgroundColor: teal[200],
        color: theme.palette.getContrastText(teal[200]),
        textAlign: 'center'

        //margin: '0px 10px 0px 0px',  //T, R , B, L
        // justifyContent: 'center',
        // display: 'flex'
    },
    card: {
        // marginTop: theme.spacing(1),
        backgroundColor: teal[200],
        color: theme.palette.getContrastText(teal[200])        
    },
    inputTextField: {
        backgroundColor: teal[100],
        color: theme.palette.getContrastText(teal[100])        
    }

  }));

const initialValues = {
    choiceGroup: '',
    choiceItems: ['', ''],
    createdAt: new Date(),
    updatedAt: new Date()
}

const validationSchema = Yup.object().shape({
    choiceGroup: Yup.string().required('You must enter a Group value'),
    choiceItems: Yup.array()
    .of(Yup.string().trim().required("Please enter a value for each Choice"))
    // .min(2,'At least two choices must be entered')
})


const Choice = (props) => {
    const classes = useStyles();
    const collectionDocRef = projectFirestore.collection(props.collection);
    // const [obj, setObj] = useState({choiceGroup:'', choiceItems:[],createdAt:'', updatedAt:'', id:''});    
    const [obj, setObj] = useState();    
    let newObj;

    const onSubmit = async (values, {resetForm}) => {
        try
        {
            const docRef = await collectionDocRef.add(values)
            
            newObj = {
                choiceGroup: values.choiceGroup,
                choiceItems: values.choiceItems,
                createdAt: values.createdAt,
                updatedAt: values.updatedAt,
                id: docRef.id
            }
        }
        catch (err) {
            newObj = {
                error: err
            }
        }
        finally {
            if (newObj.error) {
                console.log ('Error in Saving');
                setObj(newObj);
            }
            else {
                setObj(newObj);
                resetForm({value: ''});
                //console.log(obj);
            }
        }
    
    }
    




    return (
        <div>
            <Formik
                initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}

            >
                <Form>
                    
                        <Card className={classes.card} >
                            {/* <CardHeader title='Choices' /> */}
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
                                        //spacing={0}
                                        className = {classes.grid}
                                        //alignItems='center'
                                        direction = 'column'    
                                    >
                                        {choiceItems.map((choiceItem, index) => (
                                            <Grid item key={index} >
                                                <Grid container>
                                                    <Grid item xs ={10}>
                                                        <Paper className={classes.paper}>
                                                            <InputTextField className={classes.inputTextField} name={`choiceItems[${index}]`} label={`Choice ${index + 1}`} />
                                                            
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs ={2} >
                                                        <Paper className={classes.paper}>
                                                            {
                                                                
                                                                index >1 &&
                                                                (<Button type='button' variant='contained' fullWidth={false} color= 'secondary' onClick={()=>remove(index)}>-</Button>)
                                                            }
                                                            {
                                                                index > (choiceItems.length -2) &&
                                                                (<Button type='button' variant='contained' fullWidth={false} color='primary' onClick={()=>push('')}>+</Button>)
                                                            }
                                                        </Paper>
                                                    </Grid>
                                                
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            }}
                        </FieldArray>
                        
                        <Paper className={classes.paper} square>
                            <Button type='submit' variant='contained' color='primary'>
                                
                                    Save
                                
                            </Button>
                        </Paper>
                </Form>
            </Formik>
            <div id='saved'>
                ID: {obj && (obj.id)}<br/>
                Group: {obj && (obj.choiceGroup)}<br/>
            </div>
        </div>

    );
}
 
export default Choice;