import styled from "@emotion/styled";
import { Button, Tab } from "@mui/material";
import medifyLogo from '../assets/medify-logo.png';

const MedifyBlueButton = styled(Button)({
    textTransform:'none',
    backgroundColor: '#2AA8FF',
    borderRadius: '8px',
    color: 'white',
    padding: '0.25rem 1rem',
    margin: '0.25rem',
    '&:hover': {
        backgroundColor: '#2AA8FF',
        color: 'white'
    }
});

const MedifyTransparentButton = styled(Button)({
    fontWeight: 500,
    textTransform: 'none',
    color:'black',
    padding:'0.25rem 1rem',
    margin: '0.25rem'
})

const MedifyTab = styled(Tab)({
    textTransform:'none',
    '&:selected':{
        borderBottom:'4px solid #F0F0F5'
    }
})

const MedifyLogo = ()=>{
    return(
        <div style={{display:'flex'}}>
            <img src={medifyLogo} alt='medify logo' style={{width:24, height:24, padding:'1rem 0.25rem'}}/>
            <p style={{fontWeight:'bolder', color:'#2AA8FF'}}>Medify</p>
        </div> 
    )
}

const Copyright = ({year})=>{
    return(
        <p style={{fontSize:10}}>Copyright ©{year} Crio Nursing Home.com. All Rights Reserved</p>
    )
}

const SocialMediaLogo = ({logo, logoName})=>{
    return (
        <img src={logo} alt={logoName} style={{width:24, height:24, margin:4}}></img>
    )
}

export { MedifyBlueButton, MedifyTransparentButton, MedifyTab, MedifyLogo, Copyright, SocialMediaLogo };