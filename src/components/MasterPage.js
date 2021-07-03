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
                        <Container className={classes.cardGrid} maxWidth='md'>
                            <Grid container spacing = {4}>
                                <Grid item xs={12} sm={6} md={4} >
                                    <Card className='classes.card'>
                                        <CardContent className='classes.cardContent'>
                                            <Typography gutterBottom variant='h5'>
                                                Heading
                                            </Typography>
                                            <Typography>
                                                Some text here.
                                            </Typography>

                                        </CardContent>
                                        <CardActions>
                                            <Button size='sm' color='primary'>
                                                View
                                            </Button>
                                            <Button size='sm' color='primary'>
                                                Edit
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>

                            </Grid>

                        </Container>

                    </Container>
                </div>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    My Foot
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    More about my Foot
                </Typography>
            </footer>
        </div>
    );
}
 
export default MasterPage;