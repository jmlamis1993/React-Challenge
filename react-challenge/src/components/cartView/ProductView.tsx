import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { IPackage, IState } from "../../interfaces";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { PropsProductView } from "../../interfaces";
import { useDispatch } from "react-redux";
import { DeletePackage, SetActivePackage,EditPackage } from "../../actions/cart";


export const ProductView: React.FC<PropsProductView> = ({ product }) => {

  const dispatch = useDispatch();
  const { id,name, quantity, price, productList } = product;
  const [ quat,setQuat ] = useState(quantity);
  const activePackage = useSelector<IState, IPackage|null>((state) => state.activePackage);


  const handleDelete = () => {
    dispatch(SetActivePackage(product));
    dispatch(DeletePackage());
  };
  const handleEdit = () => {
    dispatch(EditPackage({...product, quantity:quat}));
  };
  const handleQuantityChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setQuat(parseInt(e.currentTarget.value));
    if(!activePackage || activePackage.id !== id ){
      dispatch(SetActivePackage(product));
    }   
  };

  return (
    <>
      <Grid container>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h4">{quantity}</Typography>
        <Typography variant="h4">{price}</Typography>
        <TextField
          size="small"
          margin="normal"
          type="number"
          name="quantity"
          variant="outlined"
          InputProps={{ inputProps: { min: 0} }}
          value={quat}
          fullWidth
          onChange={handleQuantityChange}
        />
        <Stack direction="row">
          <Button onClick={handleDelete}>Delete</Button>
          {(activePackage && activePackage.id === id) ? <Button onClick={handleEdit}>Edit</Button>:''}
        </Stack>
        <List>
          {productList
            ? productList!.map((prod) => (
                <ListItem key={prod.id}>
                  <ListItemText  primary={prod.name} />
                </ListItem>
              ))
            : ""}
        </List>
      </Grid>
    </>
  );
};
