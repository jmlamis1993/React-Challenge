import { Typography, Grid } from "@mui/material";
import data from './data'
import { ProductView } from "./ProductView";
interface Product {
  name: string;
  quantity: number;
  price: number;
  productList: any;
}

export const CartView = () => {
 
  return (
    <>
      <Grid container>
        <Typography variant="h5">Your cart (3)</Typography>
      </Grid>
      {data.map((product) => {
      'Hola'
      }
    )}
    </>
  );
};
