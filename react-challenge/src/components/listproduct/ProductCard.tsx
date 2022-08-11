import { Box, Typography,Stack,Grid } from "@mui/material";
import style from "../../assets/css/style.module.css";

export const ProductCard = () => {
  return (
    <>      
      <Box sx={{ width: 280, height: 280, backgroundColor: "#E6E8E9",}}/>      
      <Typography className={style.product_list_title}>Unisex Short Sleeve T-Shirt</Typography>
      <Stack direction="row" spacing={2}>
      <Grid container>
      <Grid item><Typography className={style.product_list_subtitle}>$10 - $24</Typography></Grid>
      </Grid>  
      <Grid container>
      <Grid item><Typography className={style.product_list_subtitle_resal}>Minimum: 24</Typography></Grid>
      </Grid> 
      </Stack>        
     
    </>
  );
};
