import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import TopNavBar from './TopNavBar';
import Choice from './Choice';
import ChoiceList from './ChoiceList';
import {useState} from 'react';
import { AppContext } from '../context';


const MasterPage = () => {
    const [choiceObjectCreate, setChoiceObjectCreate] = useState();
    const [choiceObjectUpdate, setChoiceObjectUpdate] = useState();

    const handleClick = () => {
        const initialValues = {
            id: 'KiCEl7Chpx4rsTRkr1qy',
            choiceGroup: 'Internet',
            choiceItems: ['TV', 'Tel'],
            updatedAt: new Date()
        }
        //setChoiceObject(initialValues);
        setChoiceObjectUpdate(initialValues);
    }

    return (
        <div className="MasterPage">
            <Container>
            <CssBaseline />
            <button onClick={handleClick}>Load</button>
            <h2>Master: {(choiceObjectCreate) && choiceObjectCreate.choiceGroup}</h2>
            <AppContext.Provider value = {{choiceObjectUpdate}}>
                <Choice collection='one' choiceObject={choiceObjectCreate} setChoiceObject = {setChoiceObjectCreate}/>
            </AppContext.Provider>
            <ChoiceList />
            
            </Container>
        </div>


    );
}
 
export default MasterPage;