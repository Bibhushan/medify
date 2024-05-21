import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Divider, Grid, Typography } from "@mui/material";
import './styles.css';
import news from '../assets/LatestNews.png';
import doc from '../assets/doctors/doctorlogo.png';

function NewsCard(){
    return(
        <Card>
            <CardMedia component="img" height="90%" image={news}  alt="news item"/>
            <CardContent sx={{textAlign:'left'}}>
                <Box display='flex'>
                    <Typography sx={{ fontSize: 16, padding:'0.5rem' }} color="text.secondary" gutterBottom>
                        Medical
                    </Typography>
                    <Divider orientation='vertical' flexItem variant='middle' />
                    <Typography sx={{ fontSize: 16, padding:'0.5rem' }} color="text.secondary" gutterBottom>
                        March 31, 2022
                    </Typography>
                </Box>
                <Typography variant="h6" component="div">
                    Tips To Protect Your Mental Health When You’re Sick
                </Typography>
                <CardHeader
                    avatar={
                    <Avatar src={doc}/>
                    }
                    title="Rebecca Lee"
                    sx={{fontWeight:500}}
                >
                    Rebecca Lee
                </CardHeader>
                
            </CardContent>
        </Card>
    )
}

export default function News(){

    return(
        <Box sx={{backgroundColor:'white', padding:'2rem 5rem'}}>
            <p className="section-subtitle">Blog & News</p>
            <p className="section-heading">Read Our Latest News</p>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <NewsCard />                    
                </Grid>
                <Grid item md={4}>
                    <NewsCard />                    
                </Grid>
                <Grid item md={4}>
                    <NewsCard />                    
                </Grid>
            </Grid>            
        </Box>
    )
}