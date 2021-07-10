import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import TopNavBar from './TopNavBar';
import Choice from './Choice';

const MasterPage = () => {
    //const classes = useStyles();
    return (
        <div className="MasterPage">
            <Container maxWidth='sm'>
            <CssBaseline />
            
            <Choice collection='one'/>
            </Container>
        </div>


    );
}
 
export default MasterPage;