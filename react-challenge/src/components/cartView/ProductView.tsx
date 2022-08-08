import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";

interface Product {
  name: string;
  quantity: number;
  price: number;
  productList: any;
}

export const ProductView = ({ name, quantity, price, productList }: Product) => {
  return (
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
  );
};
