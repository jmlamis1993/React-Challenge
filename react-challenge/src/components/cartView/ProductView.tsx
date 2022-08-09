import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
} from "@mui/material";
import { PropsProductView } from "../../interfaces";
import { useDispatch } from "react-redux";
import { DeletePackage, SetActivePackage } from "../../actions/cart";

export const ProductView: React.FC<PropsProductView> = ({ product }) => {
  const dispatch = useDispatch();
  const { name, quantity, price, productList } = product;

  const handleClik = () => {
    dispatch(SetActivePackage(product));
    dispatch(DeletePackage());
  };

  return (
    <>
      <Grid container>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h4">{quantity}</Typography>
        <Typography variant="h4">{price}</Typography>
        <Stack direction="row">
          <Button onClick={handleClik}>Delete</Button>
          <Button href="#text-buttons">Link</Button>
        </Stack>
        <List>
          <ListItem></ListItem>
          {/*{ productList!.map((prod) => (
        <ListItem>
        <ListItemText key={prod.id} primary={prod.name}/>
        </ListItem>
      ))}*/}
        </List>
      </Grid>
    </>
  );
};
