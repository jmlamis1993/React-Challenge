import { Stack, List, ListItem, ListItemText, Grid,Hidden } from "@mui/material";
import style from "../../assets/css/style.module.css";

export const Breadcrumb = () => {
  return (
    <>
     <Hidden only={['xs', 'md']}>
     <Stack className={style.breadcrumb} direction="row" spacing={2}>
        <Grid container className={style.body_container}>
          <List sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
            <ListItem>
              <ListItemText
                disableTypography
                primary="All products"
                className={style.list_itm}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                disableTypography
                primary="Packaging"
                className={style.list_itm}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                disableTypography
                primary="Packaging"
                className={style.list_itm}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                disableTypography
                primary="Drinkware"
                className={style.list_itm}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                disableTypography
                primary="Apparel"
                className={style.list_itm}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                disableTypography
                primary="Backpacks"
                className={style.list_itm}
              />
            </ListItem>
          </List>
        </Grid>
      </Stack>
      </Hidden>
    </>
     
      
  );
};
