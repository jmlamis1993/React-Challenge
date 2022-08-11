import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {NavBar} from './components/navbar/NavBar';
import style from "./assets/css/style.module.css";
import "@fontsource/open-sans";
import { Breadcrumb } from './components/breadcrumb/Breadcrumb';
import { CartView } from './components/cartview/CartView';


const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',  
    fontSize: 15,
    },
  });

function App() {
  return (
    <ThemeProvider theme={theme}>  
       {/* NavBar Section*/} 
      <NavBar/>
       {/* Breadcrumb Section*/}
       <Breadcrumb/>
       <Container className={style.body_container}>              
       <CartView/>    
       </Container>  
    <Box sx={{ display: 'flex' }}>     
        
         <Container>
      
        </Container>       
    </Box>
  </ThemeProvider>
  );
}

export default App;
