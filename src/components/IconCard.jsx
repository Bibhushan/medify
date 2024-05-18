import { Box } from "@mui/material";
import './styles.css';

const cardStyle = ({
    borderRadius: '8px',
    backgroundColor: 'white',
})

const selStyle = ({
    borderRadius: '8px',
    backgroundColor: '#2AA7FF14',
    border: '#2AA7FF solid'    
})

export default function IconCard({icon, name, selected=false}){

    return (
        <Box width={150} padding='1rem 2rem' margin='1rem' justifyItems='center' style={selected ? selStyle : cardStyle}>
            <img src={icon} alt={name} style={{width:60, height:'auto'}}/>
            <p style={{fontSize:16, color:'#ABB6C7', margin:0, padding:0}}>{name}</p>
        </Box>
    )

}