import { Stack, Grid, Box,Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import style from "../../assets/css/style.module.css";


export const ListProduct = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: '80px', marginBottom:'120px'}} >
      <Typography className={style.product_list_text}>You might also like</Typography>
        <Grid container spacing={8} >
          <Grid item xs={12} sm={12} md={3} >
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={12} md={3} >
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={12} md={3} >
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <ProductCard />
          </Grid>          
        </Grid>
      </Box>
    </>
  );
};
