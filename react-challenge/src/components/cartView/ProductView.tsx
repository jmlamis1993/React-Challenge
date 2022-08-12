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
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { PropsProductView } from "../../interfaces";
import { useDispatch } from "react-redux";
import {
  DeletePackage,
  SetActivePackage,
  EditPackage,
  ClearActivePackage,
} from "../../actions/cart";
import { numberConvert } from "../../helpers/numberConvert";
import image from "../../assets/images/photo.png";
import imagebtn from "../../assets/images/Vector.png";

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
  const handleCancel = () => {
    dispatch(ClearActivePackage());
    setQuat(quantity);
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
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "4px", marginBottom: "24px", padding: 0 }}
      >
        <Grid item sx={{ display: "flex" }} xs={12} sm={12} md={7}>
          <Grid item sx={{ width: 120, height: 120 }} >
            <img src={image} alt={name} />
          </Grid>
          <Grid item sx={{ marginLeft: "16px" }}>
            <Typography className={style.product_title}>{name}</Typography>
            <Stack spacing={2} direction="row">
              <Grid container>
                <Grid item xs={4}>
                  <Typography className={style.product_title_quantity}>
                    Quantity:{" "}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    sx={{ padding: '0px 0 0px' }}
                    className={style.product_title_quantity}
                    type="number"
                    name="quantity"
                    variant="standard"
                    InputProps={{ inputProps: { min: 0}, className:'style.product_title_quantity' }}
                    value={quat}
                    onChange={handleQuantityChange}
                  />
                </Grid>
              </Grid>
            </Stack>
            <List
              sx={{
                marginLeft: "25px",
                fontSize: "14px !important",
                fontWeight: "600 !important",
              }}
            >
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
                      <ListItemText
                        disableTypography
                        primary={prod.name}
                        sx={{
                          fontSize: "14px !important",
                          fontWeight: "600 !important",
                        }}
                      />
                    </ListItem>
                  ))
                : ""}
            </List>
            <Stack
              direction="row"
            divider={<Divider orientation="vertical" flexItem sx={{height:'24px'}} />}
            >
              {activePackage && activePackage.id === id ? (
                <>
                <Button onClick={handleEdit} className={style.product_link}>
                  Edit Park
                </Button>               
                </>
              ) : (
                ""
              )}
              {activePackage && activePackage.id === id ? (
                <>
                <Button onClick={handleCancel} className={style.product_link}>
                    Cancel
                </Button>           
                </>
              ) : (
                ""
              )}             
              {activePackage && activePackage.id === id ? (
               <>
                <Button onClick={handleDelete} className={style.product_link}>
                Remove
              </Button>
               </> 
             ) :(
              <>
              <Grid container >
              <Grid item xs={12} sm={12} md={3}>
              <ListItemButton onClick={handleDelete}>
                <ListItemIcon sx={{color: '#091625',height:'16px',width:'16px',minWidth: '24px !important'}} >
                <img src={imagebtn} alt={name} />
                </ListItemIcon >
                <ListItemText disableTypography primary="Remove" sx = {{fontWeight: 600,fontSize: '12px',lineHeight: '16px'}} />
              </ListItemButton>
              </Grid>         
              </Grid>                  
              </>   
              )}              
            </Stack>
          </Grid>
        
        </Grid>
        <Grid item xs={5}>
          <Grid item>
            {" "}
            <Typography
              className={style.product_price}
            >{`$${numberConvert(price)}`}</Typography>{" "}
          </Grid>
          <Grid item>
            {" "}
            <Typography className={style.product_price}>{`Total: $${
              numberConvert(price * quantity)
            }`}</Typography>{" "}
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ background: "#CED0D3", height: "1px" }} />
    </>
  );
};
