import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import style from "../../assets/css/style.module.css";
import ReactFlagsSelect from "react-flags-select";
import Facebook from "../../assets/images/icons/Group.png";

;

export const FooterCo = () => {
  return (
    <>
      <Grid container sx={{ background: "#E6E8E9", paddingLeft: "5.7%" }}>
        <Grid item xs={12} md={8} sm={8}>
          <Typography className={style.text_footer}>
            © 2022 Customer Products. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sm={4}>

       
             <FormControl  variant="standard">
             <Typography className={style.text_footer}>
           Region
          </Typography>
             <Select
                labelId="select-1"
                id="select-standard"
                value={1}
              >
                <MenuItem value={1}>
                  <img
                    src={Facebook}                    
                    alt="Facebook"
                    style={{ width: "16px", height: "11px" }}
                  />{" "}
                  United State
                </MenuItem>
              </Select>
              </FormControl>
           
            
          
          
              
              <FormControl  variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={1}

              >
                <MenuItem value={1}>English</MenuItem>
              </Select>

             </FormControl>
              
              
            </Grid>             
          
          
        </Grid>
   
    </>
  );
};
