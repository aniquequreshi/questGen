import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import useStyles from './styles';


const MasterPage = () => {
    const classes = useStyles();
    return (
        <div className="MasterPage">
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <QuestionAnswerIcon className={classes.icon}/>
                    <Typography variant='h6'>
                        Question Generator
                    </Typography>
                </Toolbar>    
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography variant ='h2' align='center' color='textPrimary' gutterBottom>
                            Question Generator
                        </Typography>
                        <Typography variant ='h5' align='center' color='textSecondary' paragraph>
                            This site is used to generate Multiple Choice Questions fast.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>Multiple Choice</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>True Choice</Button>
                                </Grid>
                            </Grid>
                        </div>

                    </Container>
                </div>
            </main>
        </div>
    );
}
 
export default MasterPage;