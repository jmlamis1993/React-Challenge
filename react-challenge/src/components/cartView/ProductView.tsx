import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IPackage, IState } from "../../interfaces";
import style from "../../assets/css/style.module.css";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Stack, 
  Divider,
} from "@mui/material";
import { PropsProductView } from "../../interfaces";
import { useDispatch } from "react-redux";
import {
  DeletePackage,
  SetActivePackage,
  EditPackage,
  ClearActivePackage,
} from "../../actions/cart";
import image from "../../assets/images/photo.png";

export const ProductView: React.FC<PropsProductView> = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, quantity, price, productList } = product;
  const [quat, setQuat] = useState(quantity);
  const activePackage = useSelector<IState, IPackage | null>(
    (state) => state.activePackage
  );

  const handleDelete = () => {
    dispatch(SetActivePackage(product));
    dispatch(DeletePackage());
  };
  const handleEdit = () => {
    dispatch(EditPackage({ ...product, quantity: quat }));
    dispatch(ClearActivePackage());

  };
  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setQuat(parseInt(e.currentTarget.value));
    if (!activePackage || activePackage.id !== id) {
      dispatch(SetActivePackage(product));
    }
  };

  return (
    <>
      <Grid container spacing={2} sx={{marginTop:'20px',marginBottom:'24px',padding: 0}}>        
        <Grid item sx={{display:'flex'}} xs={7} spacing={2} >
        <Grid item sx={{ width: 120, height: 120 }}>
          <img src={image} alt={name} />
        </Grid>
        <Grid item sx = {{marginLeft:'16px'}}>
        <Typography className={style.product_title}>{name}</Typography>
          <Stack spacing={2}  direction="row">   
           <Grid container>
           <Grid item xs={4}>
           <Typography className={style.product_title_quantity}>
            Quantity:{" "}
          </Typography>  
            </Grid>  
           <Grid item xs={2}>
           <TextField
            sx ={{padding:0,}}
            className={style.product_title_quantity}
            type="number"
            name="quantity"
            variant="standard"
            InputProps={{ inputProps: { min: 0 , fontSize:'1000px'}}}
            value={quat}
            onChange={handleQuantityChange}
          />  
            </Grid>  
            </Grid>       
               
          
            
          
          </Stack> 
           <List sx = {{marginLeft:'25px',fontSize: '14px !important', fontWeight: '600 !important'}}>    
            {productList
              ? productList!.map((prod) => (
                  <ListItem
                    sx={{
                      display: "list-item",                      
                      listStyle: "initial",
                      padding: 0,
                      paddingRight: -16,
                    }}                    
                    key={prod.id}
                  >
                    <ListItemText disableTypography primary={prod.name} sx={{fontSize: '14px !important', fontWeight: '600 !important'}}/>
                  </ListItem>
                ))
              : ""}
          </List>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
            {activePackage && activePackage.id === id ? (
              <Button onClick={handleEdit} className={style.product_link}>
                Edit Park
              </Button>
            ) : (
              ""
            )}
            <Button onClick={handleDelete} className={style.product_link}>
              Remove
            </Button>
          </Stack>
        </Grid>          
        </Grid>
        <Grid item xs={5}>
          <Grid item>  <Typography className={style.product_price}>{`$${price}`}</Typography> </Grid>
          <Grid item>  <Typography className={style.product_price}>{`Total: ${price*quantity}`}</Typography> </Grid>
        </Grid>
      </Grid>
      
      <Divider sx={{background: '#CED0D3', height: '1px'}}/>
    </>
  );
};
