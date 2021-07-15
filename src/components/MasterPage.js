import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import TopNavBar from './TopNavBar';
import Choice from './Choice';
import ChoiceList from './ChoiceList';
import {useState} from 'react';
import { AppContext } from '../context';


const MasterPage = () => {
    const [choiceObject, setChoiceObject] = useState();
    const [choiceObjectUpdate, setChoiceObjectUpdate] = useState();

    const handleClick = () => {
        const initialValues = {
            id: '1',
            choiceGroup: 'Internet',
            choiceItems: ['TV', 'Tel'],
            updatedAt: new Date()
        }
        setChoiceObject(initialValues);
        setChoiceObjectUpdate('yes');
    }

    // const initialValues = {
    //     id: '1',
    //     choiceGroup: 'Internet',
    //     choiceItems: ['TV', 'Tel'],
    //     updatedAt: new Date()
    // }
    // setChoiceObject(initialValues);

    //const classes = useStyles();
    return (
        <div className="MasterPage">
            <Container>
            <CssBaseline />
            <button onClick={handleClick}>Load</button>
            <h2>Master: {(choiceObject) && choiceObject.choiceGroup}</h2>
            <AppContext.Provider value = {{choiceObject}}>
                <Choice collection='one' update={setChoiceObjectUpdate} choiceObject={choiceObject} setChoiceObject = {setChoiceObject}/>
                <ChoiceList />
            </AppContext.Provider>
            </Container>
        </div>


    );
}
 
export default MasterPage;