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

} from "@mui/material";
import style from "../../assets/css/style.module.css";
import { Search as SearchIcon } from "react-feather";
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export const NavBar = () => {
  return (
   
      <Toolbar  className={style.navBar}>
        <Grid container className={style.body_container}>
          <Grid item xs={2}>
            <Box component="span" className={style.logo_box}>
              <Typography className={style.logo_text}>Logo</Typography>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <TextField
             size="small"
              className={style.search}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ fontSize: 15, boxSizing: "inherit" }}>
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Search Product"
            />
          </Grid>
            <Grid item xs={3} >
            <Box sx={{ display: "flex", color:"white", fontSize:15,minWidth: '35px' }}>
              <ListItemButton>
                <ListItemIcon className={style.navbar_space}>
                  <PersonIcon   className={style.navBar_icons}/>
                </ListItemIcon>
                <ListItemText disableTypography primary="Sign in"  className={style.navBar_links}/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon className={style.navbar_space}>
                  <LocalMallIcon className={style.navBar_icons}/>
                </ListItemIcon >
                <ListItemText disableTypography primary="Cart"  className={style.navBar_links}/>
              </ListItemButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
  
  );
};
