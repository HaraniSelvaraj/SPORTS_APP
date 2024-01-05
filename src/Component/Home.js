import './Home.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import{Link} from "react-router-dom";
import Navbar from './Navbar';


 
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

 export default function Home()
{
  const theme = useTheme();
  return(
    <div>
      <Navbar></Navbar>

   
    <div class="home-container">
       <div class="text-container">
      <h1 class="heading-1">Book Your Events In Our Website</h1>
     
      <p class="paragraph">EVERY  EVENT NEED TO BE PERFECT</p>
       <button class="button-home"><Link to="/About">About us</Link></button>
       <button class="button1-home">Get Started</button>
       </div>
    </div>
       <h1 class="heading-after-home-image ">Sports Equipments are Present Here</h1>
      


      




    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
         
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=" https://xco.s3.eu-west-1.amazonaws.com/categories/February2018/FgLjQMFYPUnkOl465MdY.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" class="text">
             BasketBall
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


            
            </Item> 
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlwGM6XkVd1GWuZD53oBIXScKmpd5IxPMWw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" class="text">
            Tennis
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4pr4aprZcLRtQI9YHWAGm6sm0Ev7UNbFKXw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" class="text">
             Sports Geer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDurNXIfGtMIgh1fXNoxoM4syDpJ_86T6uw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" class="text">
             Berkins Shoes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={2}>
          
        </Grid>
      </Grid>
    </Box>
 
    <br></br>
    <br></br>
   <br></br>

    
    <h1 class="text-services">Sports Equipments Shops</h1>
<br></br>
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
          <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" class="card-text">
          LeatherTrends

          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" class="subtitle">
         Leather Shoes,
         Berkins Shoes
         
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 400,height:300}}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1GJkf2ShyJzTl8qoZWZx9hGK3XIqXtzZ4g&usqp=CAU"
        alt="Live from space album cover"
      />
    </Card>
    </Item>
          
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" class="card-text">
          Saftey Kits

          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" class="subtitle">
         Geer,ice,medical kit,emergency servival...
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300,height:300}}
        image="data:image/jpeg;base64,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"
        alt="Live from space album cover"
      />
    </Card>



          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" class="card-text">
          Fitness Centers

          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" class="subtitle">
         Fittness Equipments,Vigor Fitness
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 400}}
        image="data:image/jpeg;base64,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"
        alt="Live from space album cover"
      />
    </Card>






          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" class="card-text">
           Golf

          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" class="subtitle">
        Golf Accessories,Golf Clubs
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 400}}
        image="data:image/jpeg;base64,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"
        alt="Live from space album cover"
      />
    </Card>

          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
          <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" class="card-text">
           Sports Bags

          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" class="subtitle">
           gym,Adventure worx,leather bags
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 400}}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgBTGXkknOrRboa0lWMk0wSMSgdUYAgT4vw&usqp=CAU"
        alt="Live from space album cover"
      />
    </Card>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" class="card-text">
           Sports Dress

          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" class="subtitle">
            Shorts,T-Shirts,gym....
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300,height:350}}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sutbZlzCHZUrJgXc6qWDwrVER1SpQY5R1tlJSHKYj1FjJwhjA4Al1T_YQQCTS2k1PmA&usqp=CAU"
        alt="Live from space album cover"
      />
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
     <br></br>
     <br></br>
      <br></br>
     <br></br>
    <br></br>
 

    
     
    </div>
    );
}