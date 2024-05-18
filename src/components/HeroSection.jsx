import { Grid } from "@mui/material";
import heroImage from '../assets/hero_image.png';
import { MedifyBlueButton } from "./CustomComponents";

export default function HeroSection({topText, middleNormal, middleHighlight, bottomText, onSearch}){

    return(
        <Grid container style={{padding:'1rem 2rem'}}>
            <Grid item md={6} sx={{textAlign:'left', padding:'2rem 0rem'}}>
                <p style={{fontSize:20, fontWeight:400, margin:'0.5rem 0rem'}}>{topText}</p>
                <p style={{fontSize:30, fontWeight:'bolder', margin:'0.5rem 0rem'}}>{middleNormal + " "}<span style={{color:'#2AA8FF'}}>{middleHighlight}</span></p>
                <p>{bottomText}</p>
                <MedifyBlueButton sx={{padding:'1rem'}} onClick={onSearch}>Find Centers</MedifyBlueButton>
            </Grid>
            <Grid item md={6}>
                <img src={heroImage} alt='hero' style={{width:'100%', height:'auto'}}></img>
            </Grid>
        </Grid>
    )
}