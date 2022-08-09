import { Typography, Grid } from "@mui/material";
import { ProductView } from "./ProductView";
import { useSelector } from "react-redux";
import { IPackage, IState } from "../../interfaces";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UpdateTotalAmount } from "../../actions/cart";

export const CartView = () => {
  const packages = useSelector<IState, IPackage[]>((state) => state.cart);
  const dispatch = useDispatch();
  const total = useSelector<IState, number>((state) => state.totalAmount);
  useEffect(() => {
    let total = 0;
    if (packages.length != 0) {
      total = packages
        .map(({ quantity, price }) => quantity * price)
        .reduce((a, c) => a + c);
    }
    dispatch(UpdateTotalAmount(total));
  }, [packages]);
  return (
    <>
      <Grid container>
        <Typography variant="h5">{`Your cart (${packages.length})`}</Typography>
      </Grid>
      <Grid container>
        <Typography variant="h5">{`Total Amount (${total})`}</Typography>
      </Grid>
      {packages.map((pack) => {
        return <ProductView key={pack.id} product={pack} />;
      })}
    </>
  );
};
