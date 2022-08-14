import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { NavBar } from "./components/navbar/NavBar";
import style from "./assets/css/style.module.css";
import "@fontsource/open-sans";
import { Breadcrumb } from "./components/breadcrumb/Breadcrumb";
import { CartView } from "./components/cartview/CartView";
import { ListProduct } from "./components/listproduct/ListProduct";
import { Footer } from "./components/footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    fontSize: 15,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>  
        <NavBar/>
        <Breadcrumb/>
       <Container className={style.body_container}>              
       <CartView/> 
       <ListProduct/>   
       </Container>  
      <Footer/>
  </ThemeProvider>
  );
}

export default App;
