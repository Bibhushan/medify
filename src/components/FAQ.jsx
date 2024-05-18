import { Accordion, AccordionDetails, AccordionSummary, Box, Grid } from "@mui/material";
import './styles.css';
import faq from '../assets/FAQ.png';
import AddIcon from '@mui/icons-material/Add';

function FAQItem({question}){
    return(
        <Accordion elevation={0}>
            <AccordionSummary expandIcon={<AddIcon/>} sx={{fontWeight:600, color:'#1B3C74'}}>
                {question}
            </AccordionSummary>
            <AccordionDetails> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </AccordionDetails>
        </Accordion>
    )
}

export default function FAQ(){

    const faqs =    [{question: 'Why choose our medical for your family?'},
    {question: 'Why we are different from others?'},
    {question: 'Trusted & experience senior care & love'},
    {question: 'How to get appointment for emergency cases?'},
    ];

    return(
        <Box sx={{backgroundColor:'white', padding:'2rem 5rem'}}>
            <p className="section-subtitle">Get Your Answers</p>
            <p className="section-heading">Frequently Asked Questions</p>
            <Grid container spacing={2}>
                <Grid item md={6} style={{justifyItems:'right'}}>
                    <img src={faq} alt='faq' style={{maxWidth:'100%', maxHeight:480}}></img>
                </Grid>
                <Grid item md={6} sx={{padding:'2rem'}}>
                    <Box sx={{textAlign:'left', marginTop:'2rem', fontSize:12}}>
                        {faqs.map((item)=>(<FAQItem question={item.question}/>))}
                    </Box>
                </Grid>
            </Grid>            
        </Box>
    )
}