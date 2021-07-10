import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import TopNavBar from './TopNavBar';
import useStyles from './styles';
import Choice from './Choice';
import Fake from './Fake';

const MasterPage = () => {
    const classes = useStyles();
    return (
        <div className="MasterPage">
            <CssBaseline />
            
<Fake />
            <Choice />

        </div>


    );
}
 
export default MasterPage;