
import React,{ useRef, useEffect, useState}  from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline'
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { signIn } from '../shared/NavBar/LogIn'
import { TextField } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import {addComment} from '../Services/welcomeCommentsServices'

import {Alert,AlertTitle} from '@material-ui/lab'
const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://www.linkedin.com/in/aresky-berkane/" target="_blank">
      <img alt="img" src="https://img.icons8.com/clouds/100/000000/linkedin.png"/>
      </Link>

    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export  function WelcomePage() {
  
  
  let cards = [1,2,3,4];
  const [rating,setRating] = useState(2)
  const [comment,setComment] = useState('')
  const [name,setName] = useState('')
  const [isSucces,setIsSucces] = useState(false)
  
  const classes = useStyles();
    useEffect(() => {
      return () => {
      }
    }, [])

  const submitComment = (event) => {
    // console.log('name',name,'comment',comment,'rating',rating);
    addComment(rating,comment,name);
    setIsSucces(true);
    setRating(2);
    setComment('');
    setName('')
   
    event.preventDefault()
  }

  if(isSucces){
    setTimeout( () => setIsSucces(false),3000);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to 1000 Pi
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Learn to improve your memory through simple exercises based on mnemonic principles, learn the first thousand decimals of Pi using the Major System and the Mental Palace. Start now by logging in and let the journey begin!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={e => signIn(e)} variant="contained" color="primary">
                        Log in now!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href='mailto:areskyuk@gmail.com?subject= Feed back from 1000 Pi'>
                    Give some technical feedback to the developer!
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
       
       <form onSubmit={e => submitComment(e)}>
         <Container align='center'>
          <Typography variant='h6'>Please, rate the app! {'😁'}</Typography>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <StyledRating
          name="customized-color"
          defaultValue={rating}
          value={rating}
          onChange={(e) =>  setRating(e.target.value)}
          getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          />
      </Box>
      <TextField
          label="Name"
          style={{ margin: 8 }}
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          ></TextField>
          <TextField
          label="Write a comment 😄!"
          style={{ margin: 8 }}
          helperText="Happy to have some feedback!"
          fullWidth
          required
          value={comment}
          onChange={e => setComment(e.target.value)}
          ></TextField>
      <Button variant="contained" color="primary" onClick={(e)=>submitComment(e)}> submit!</Button>
      </Container>

       </form>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {!cards ? cards.map((card) =>(
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Typography
                    align='center'
                    styles={{marginTop:'5%'}}
                    variant='h5'
                    >Something here</Typography>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography>
                      Comment
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             )):<Typography></Typography>}
                 {isSucces ? <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                        Thank you for the feedback! {'🧡'}
                  </Alert>:<Typography></Typography> }       
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
                Developed by Aresky Berkane
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        I am a software developer passionate about learning and creating new ideas, inventions and passions. If you are a recruiter or have a startup and would like to have me on your team, do not hesitate to contact me :)
        </Typography>
        <Footer />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

































// import React from 'react';
// import { Typography, Button, makeStyles, Grid } from '@material-ui/core';

// const useStyles = makeStyles(ThemeProvider => ({
//     root:{
//         display:'flex',
//         flexDirection:'column',
//         flexGrow:1,
//         alignContent:'center'
//     }
// }))

// export const WelcomePage = () => {

//     const classes = useStyles;
//     return (
//         <>
//         <div className={classes.root}>
//         <Typography variant='h1'>Welcome to 1000 Pi!</Typography>

//         <Typography variant='h5'>The best site to learn how to memorize things!! </Typography>
        
//         {/* <Grid item md={12}>
//         <Typography variant='h5'>Improve your concentration and memory by simply doing! </Typography>
//     </Grid> */}
//         <Button color='primary' variant='contained'>Start Now!</Button>
//         <Typography variant='h5'>Developed by Aresky Berkane</Typography>


//         <Typography variant='h5'>{'💘'} With love {'💘'}</Typography>
//             <img alt='img' src="https://img.icons8.com/clouds/150/000000/linkedin.png"/>
//     </div>
//         </>
//     )
// }