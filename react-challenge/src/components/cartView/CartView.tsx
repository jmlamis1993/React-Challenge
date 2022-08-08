import { Typography, Grid } from "@mui/material";
import { ProductView } from "./ProductView";
import { useSelector } from 'react-redux'
import { IPackage, IState } from "../../interfaces";


export const CartView = () => {
   const packages = useSelector<IState,IPackage[]>((state) => state.cart); 
  return (
    <>
      <Grid container>
        <Typography variant="h5">Your cart (3)</Typography>
      </Grid>
      {packages.map((product:IPackage) => {
         <ProductView product={product}/>
      }
    )}
    </>
  );
};
