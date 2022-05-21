import styled from 'styled-components'
import Paper from "@mui/material/Paper";

const Box = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#0064EB',
  padding: '16px 42px',
  borderBottom: '1px solid #D4D8DD',
  '@media(max-width: 870px)': {
    padding: '16px 8px'
  }
});

const StyledInput = styled('input')({
  fontSize: '14px',
  letterSpacing: '0.16px',
  width: '256px',
  outline: 'none',
  border: 0,
  '@media(max-width: 870px)': {
    letterSpacing: '0px',
    fontSize: '12px',
    width: '150px',
  }
});

const StyledPaper = styled(Paper)({
  display: "flex",
  alignItems: "center",
  maxHeight: '100%',
  height: '40px',
  maxWidth: '100%',
  width: '500px',
  marginLeft: '22px',
  borderRadius: '6px!important',
});

const StyledLogo = styled('img')({
  width: '100%',
  height: '100%',
  maxWidth: '40px',
  maxHeight: '40px',
});

export { Box, StyledInput, StyledPaper, StyledLogo };