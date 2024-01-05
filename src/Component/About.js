import './About.css';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import './About.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import Navbar from './Navbar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function About()
{
  const theme = useTheme();
  return(
   
    <div>
       <Navbar></Navbar>
    <div class="welocme-container">
    <h1 class="Main-heading">ABOUT US</h1>
    
     <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            <h1 class="card-heading">WELCOME</h1>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <p class="para">Greetings and welcome to our Sports Emporium</p>
          <p  class="para">We are delighted to see you as a part of our community.</p>
          <p  class="para">Feel free to discover,interact,and collaborate with us to create something wonderful."</p>
          </Typography>
        </CardContent>
      
          
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 500}}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfbBCGM4FMYvmJH-_SNP_gK48KQMjmxuMCw&usqp=CAU"
        alt="Live from space album cover"
      />
    </Card>
    </div>
    <div>
      <h1 class="events-heading">Events</h1>
      <h1 class="para1">TYPE OF SPORTS & EVENTS</h1>
      <p class="description">Sports Equipments,Celebrations,Offers.</p>
    </div>
    
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0GubjzPEE6Br7rCrubUSu6Yu7qnr9rcOuA&usqp=CAU"
          alt="green iguana" class="img-card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          CORPORATE EVENTS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>Meetings</p>
         <p>Parties</p>
        <p>Product Launches</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://desktime.com/blog/wp-content/uploads/2019/07/board-games-1024x707.png"
          alt="green iguana" class="img-card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          FUN GAMES
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>Team building games</p>
         <p>Intractive Games</p>
        <p>Childrent gaming</p>
       </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HSw_3xTyn6a9MQOuJavfnxK23sBfjeCvWA&usqp=CAU"
          alt="green iguana" class="img-card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          SPORTS EQUIPMENTS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>Cricket Sports Equipments </p>
         <p>Sports Sefty Equipments</p>
         <p>Sports Training Equipments</p>
       </Typography>
        </CardContent>
      </CardActionArea>
       </Card>
    </Item>
    </Grid>
      </Grid>
    </Box>
 

    
  </div>
  )
}
export default About;