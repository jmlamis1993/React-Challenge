import {
  Grid,
  InputAdornment,
  SvgIcon,
  Typography,
  Box,
  Toolbar,
  TextField,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Hidden
} from "@mui/material";
import style from "../../assets/css/style.module.css";
import { Search as SearchIcon } from "react-feather";
import user from "../../assets/images/icons/user.png";
import cart from "../../assets/images/icons/cart.png";

export const NavBar = () => {
  return (
    <Toolbar className={style.navBar}>
      <Grid container className={style.body_container}>
        <Grid item xs={12} md={12} lg={2} >
        <Box sx={{ width: '172px', height: '48px', backgroundColor: "#CED0D3",}}>            
              <Typography className={style.logo_text} >Logo</Typography>
        </Box>          
        </Grid>
        <Hidden only={['xs', 'md']}>
        <Grid item xs={8}>
          <TextField
            size="small"
            className={style.search}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{ fontSize: 15, boxSizing: "inherit" }}
                >
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Search Product"
          />
        </Grid>
        </Hidden>
        <Grid item  xs={12} md={12} lg={2}  >
          <Stack direction={{ sm: "row" }}>
            <ListItemButton className={style.navBar_right} >
              <ListItemIcon className={style.navbar_space}>
                <img src={user} alt="Signin" className={style.navBar_icons} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary="Sign in"
                className={style.navBar_links}
              />
            </ListItemButton>
            <ListItemButton className={style.navBar_right}>
              <ListItemIcon className={style.navbar_space}>
                <img src={cart} alt="Cart" className={style.navBar_icons} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary="Cart"
                className={style.navBar_links}
              />
            </ListItemButton>
          </Stack>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
