import styled from "@emotion/styled";
import { Button } from "@mui/material";

const MedifyBlueButton = styled(Button)({
    textTransform:'none',
    backgroundColor: '#2AA8FF',
    borderRadius: '8px',
    color: 'white',
    padding: '0.25rem 1rem',
    margin: '0.25rem'
});

const MedifyTransparentButton = styled(Button)({
    fontWeight: 500,
    textTransform: 'none',
    color:'black',
    padding:'0.25rem 1rem',
    margin: '0.25rem'
})

export { MedifyBlueButton, MedifyTransparentButton };