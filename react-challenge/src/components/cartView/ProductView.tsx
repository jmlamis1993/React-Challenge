import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import { IPackage } from "../../interfaces";


export const ProductView = (product:IPackage) => {
  const { name, quantity, price, productList } = product;
  return (
    <>
      <Grid container>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h4">{quantity}</Typography>
      <Typography variant="h4">{price}</Typography>
      <List>
      <ListItem>
        <ListItemText primary= "product" />
      </ListItem>
      {/*{productList.map((product) => (
        <ListItem>
        <ListItemText primary= product />
        </ListItem>
      ))}*/}
     </List>
    </Grid>
    </>  
  );
};
