import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import TopNavBar from './TopNavBar';
import Choice from './Choice';
import ChoiceList from './ChoiceList';
import {useState} from 'react';
import { AppProvider } from '../context';


const MasterPage = () => {
    const [choiceObjectCreate, setChoiceObjectCreate] = useState();
    // const [choiceObjectUpdate, setChoiceObjectUpdate] = useState();

    // const {choiceObjectToUpdate} = useContext(AppContext);

    // const handleClick = () => {
    //     const initialValues = {
    //         id: 'KiCEl7Chpx4rsTRkr1qy',
    //         choiceGroup: 'Internet',
    //         choiceItems: ['TV', 'Tel'],
    //         updatedAt: new Date()
    //     }
    //     //setChoiceObject(initialValues);
    //     setChoiceObjectUpdate(initialValues);
    // }

    return (
        <div className="MasterPage">
            <Container>
            <CssBaseline />

            {/* <h2>Master: {(choiceObjectCreate) && choiceObjectCreate.choiceGroup}</h2> */}
            <AppProvider>
                <Choice collection='one' choiceObject={choiceObjectCreate} setChoiceObject = {setChoiceObjectCreate}/>
                <ChoiceList />
            </AppProvider>
            </Container>
        </div>


    );
}
 
export default MasterPage;