import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import { IPackage } from "../../interfaces";

interface Props {
 product: IPackage;
 
}


export const ProductView:React.FC<Props> = ({ product }) => {
  
  const {name,quantity,price} = product
  return (
    <>
      <Grid container>
      <Typography variant="h4">{name}<br/></Typography>
      <Typography variant="h4">{quantity}<br/></Typography>
      <Typography variant="h4">{price}<br/></Typography>
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
