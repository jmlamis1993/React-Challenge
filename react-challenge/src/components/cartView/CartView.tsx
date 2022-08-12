import {
  Typography,
  Grid,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import { ProductView } from "./ProductView";
import { useSelector } from "react-redux";
import { IPackage, IState } from "../../interfaces";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UpdateTotalAmount } from "../../actions/cart";
import style from "../../assets/css/style.module.css";
import { numberConvert } from "../../helpers/numberConvert";


export const CartView = () => {
  const packages = useSelector<IState, IPackage[]>((state) => state.cart);
  const dispatch = useDispatch();
  const total = useSelector<IState, number>((state) => state.totalAmount);
  useEffect(() => {
    let total = 0;
    if (packages.length !== 0) {
      total = packages
        .map(({ quantity, price }) => quantity * price)
        .reduce((a, c) => a + c);
    }
    dispatch(UpdateTotalAmount(total));
  }, [packages]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={9} sx={{ marginTop: "32px" }}>
          <Grid container>
            <Typography className={style.title_text}>{`Your cart (${
              packages!.length
            })`}</Typography>
          </Grid>
          {packages.map((pack) => {
            return <ProductView key={pack.id} product={pack} />;
          })}
        </Grid>
        <Grid item xs={3} sx={{ marginTop: "32px" }}>
          <Typography className={style.title_text}>Order Summary</Typography>
          <Stack
            direction="row"
            sx={{ marginTop: "24px", marginBottom: "24px" }}
          >
            <Grid item xs={6}>
              <Typography className={style.text_sumary}>
                Number of items:{" "}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography className={style.text_sumary_rigth}>
                {packages!.length}
              </Typography>
            </Grid>
          </Stack>
          <Divider sx={{ background: "#CED0D3", height: "1px" }} />
          <Stack
            direction="row"
            sx={{ marginTop: "24px", marginBottom: "24px" }}
          >
            <Grid item xs={6}>
              <Typography className={style.text_total}>
                Total:{" "}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography className={style.text_total_rigth}>
                {`$${numberConvert(total)}`}
              </Typography>
            </Grid>
          </Stack>        
          <Grid item><Button variant="contained" className={style.btn_contained} fullWidth >Proceed to Checkout</Button></Grid>
          <Grid item sx = {{marginTop:"12px"}}><Button variant="outlined" className={style.btn_outlined} fullWidth>Outlined</Button></Grid>
      
      
    
        </Grid>
      </Grid>
    </>
  );
};
