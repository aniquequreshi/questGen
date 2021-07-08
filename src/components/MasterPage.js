import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import TopNavBar from './TopNavBar';
import useStyles from './styles';
import Choice from './Choice';

const MasterPage = () => {
    const classes = useStyles();
    return (
        <div className="MasterPage">
            <CssBaseline />

            <Choice />

        </div>


    );
}
 
export default MasterPage;