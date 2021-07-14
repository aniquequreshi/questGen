import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import TopNavBar from './TopNavBar';
import Choice from './Choice';
import ChoiceList from './ChoiceList';
import {useState} from 'react';

const MasterPage = () => {
    const [choiceObject, setChoiceObject] = useState();

    //const classes = useStyles();
    return (
        <div className="MasterPage">
            <Container>
            <CssBaseline />
            <h2>Master: {(choiceObject) && choiceObject.choiceGroup}</h2>
            <Choice collection='one' choiceObject={choiceObject} setChoiceObject = {setChoiceObject}/>
            <ChoiceList />
            </Container>
        </div>


    );
}
 
export default MasterPage;