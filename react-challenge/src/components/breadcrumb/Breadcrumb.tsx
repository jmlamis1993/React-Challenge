import {  
    Box,  
    List,
    ListItem,
    ListItemText,

  } from "@mui/material";
  import style from "../../assets/css/style.module.css";

export const Breadcrumb = () => {
  return (  
          <>
           <Box className={style.breadcrumb}>
           <List>            
                <ListItem>
                  <ListItemText
                    primary="Single-line item"                  
                  />
                </ListItem>              
            </List>
           </Box>
          </>       
    )
}
