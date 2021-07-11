import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import TopNavBar from './TopNavBar';
import Choice from './Choice';
import ChoiceList from './ChoiceList';

const MasterPage = () => {
    //const classes = useStyles();
    return (
        <div className="MasterPage">
            <Container>
            <CssBaseline />
            
            <Choice collection='one'/>
            <ChoiceList />
            </Container>
        </div>


    );
}
 
export default MasterPage;