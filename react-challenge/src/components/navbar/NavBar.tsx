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
   
      <Toolbar variant="dense" className={style.navBar}>
        <Grid container>
          <Grid item xs={3}>
            <Box component="span" className={style.logo_box}>
              <Typography className={style.logo_text}>Logo</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
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
          <Grid item xs={3}>
            <Box sx={{ display: "flex", color:"white", fontSize:15 }}>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon  sx={{  color:"white" }} />
                </ListItemIcon>
                <ListItemText primary="Sign in" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LocalMallIcon sx={{  color:"white" }}/>
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItemButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
  
  );
};
