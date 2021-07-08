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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Choice />
                </Grid>
            </Grid>
            



        </div>


    );
}
 
export default MasterPage;