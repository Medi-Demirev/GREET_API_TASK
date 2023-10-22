import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BsFillEmojiSmileFill } from 'react-icons/bs';


function Navigation() {
  return (
   
    <AppBar  position="static" >
      <Container sx={{marginLeft:'10px'}}>
        <Toolbar disableGutters>
            <BsFillEmojiSmileFill style={{color: "white", fontSize: "2.5em", marginRight:25 }} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GREET 
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  
  );
}
export default Navigation;
