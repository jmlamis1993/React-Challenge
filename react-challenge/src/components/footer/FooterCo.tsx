import {
  Typography,
  Grid,
 
  Select,
  MenuItem,

} from "@mui/material";
import style from "../../assets/css/style.module.css";
import Facebook from "../../assets/images/icons/Group.png";

export const FooterCo = () => {
  return (
    <>
      <Grid container sx={{ background: "#E6E8E9", paddingLeft: "5.7%" }}>
        <Grid item xs={12} md={8} sm={8}>
          <Typography className={style.text_footer}>
            © 2022 Customer Products. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sm={4} className={style.dropdown_container}>
          <Typography className={style.text_dropdown}>Region: </Typography>
          <Select
            variant="standard"
            labelId="select-1"
            id="select-standard1"
            value={1}
            className={style.dropdown}
            disableUnderline
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

          <Typography className={style.text_dropdown}>Language: </Typography>
          <Select
            variant="standard"
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={1}
            className={style.dropdown}
            disableUnderline
          >
            <MenuItem value={1}>English</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </>
  );
};
