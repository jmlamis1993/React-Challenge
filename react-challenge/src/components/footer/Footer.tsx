import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
} from "@mui/material";
import style from "../../assets/css/style.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Facebook from "../../assets/images/icons/Facebook.png";
import Linkedin from "../../assets/images/icons/Linkedin.png";
import Twitter from "../../assets/images/icons/Twitter.png";
import Youtube from "../../assets/images/icons/Youtube.png";
import { FooterCo } from "./FooterCo";

export const Footer = () => {
  return (
    <>
      <Grid container className = {style.footer_container}>
        <Grid container className={style.body_container}>
          <Grid item  xs={12} md={12} lg={4} className={style.mb_class}>
          <Box sx={{ width: '172px', height: '48px', backgroundColor: "#CED0D3"}} className={style.logo_footer}>            
              <Typography className={style.logo_text} >Logo</Typography>
            </Box>
            <Typography className={style.text_footer}>
              We sell custom products for all your needs. Packs and bulk
              products that you will enjoy.
            </Typography>
             <Grid container direction="row" alignItems="center" className ={style.phone_footer_text}>
              <Grid item>
                <LocalPhoneIcon sx={{ width: 16, marginTop: "8px" }} />
              </Grid>
              <Grid item className={style.phone_text}>
                +1-202-555-0129
              </Grid>
            </Grid> 
            <Stack direction={"row"} spacing={1} sx={{ marginTop: "40px" }} className ={style.logo_container}>
              <img
                src={Facebook}
                alt="Facebook"
                className={style.footer_icons}
              />
              <img src={Twitter} alt="Twitter" className={style.footer_icons} />

              <img
                src={Linkedin}
                alt="Linkedin"
                className={style.footer_icons}
              />
              <img src={Youtube} alt="Youtube" className={style.footer_icons} />
              <img
                src={Facebook}
                alt="Facebook"
                className={style.footer_icons}
              />
            </Stack>
          </Grid>
          <Grid item  xs={12} md={12} lg={3} className={style.mb_class}>
            <Typography className={style.footer_title}>Our company</Typography>
            <List>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="About us"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="FAQ"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Partnerships"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Sustainability"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Blog"
                  className={style.footer_link}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={12} lg={3} className={style.mb_class}>
            {" "}
            <Typography className={style.footer_title}>
              How can we help
            </Typography>
            <List>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Place a ticket"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Track your order"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Help center"
                  className={style.footer_link}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            <Typography className={style.footer_title}>Information</Typography>
            <List>
              <ListItem>
                <ListItemText
                  disableTypography
                  primary="Contact us"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Live chat"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Privacy"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Terms of use"
                  className={style.footer_link}
                />
              </ListItem>
              <ListItem sx={{ paddingLeft: "24px" }}>
                <ListItemText
                  disableTypography
                  primary="Blog"
                  className={style.footer_link}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <FooterCo />
    </>
  );
};
