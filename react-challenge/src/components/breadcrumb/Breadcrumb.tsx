import {  
    Stack,  
    List,
    ListItem,
    ListItemText,
    Grid,  

  } from "@mui/material";
  import style from "../../assets/css/style.module.css";

export const Breadcrumb = () => {
  return (  
          <>
          <Stack className={style.breadcrumb} direction="row" spacing={2}>
          <Grid container className={style.body_container}>
           <List sx = {{ display: 'flex', flexDirection: 'row', padding: 0 }}>            
           <ListItem>
                  <ListItemText
                    disableTypography
                    primary="All products"
                    className={style.list_itm}                        
                  />                  
                </ListItem> 
                <ListItem  sx={{paddingLeft:'24px'}}>   
                <ListItemText
                    disableTypography
                    primary="Packaging"  
                    className={style.list_itm}                    
                  />
                </ListItem>
                <ListItem  sx={{paddingLeft:'24px'}}> 
                <ListItemText
                    disableTypography
                    primary="Packaging"
                    className={style.list_itm}      
                  />
                </ListItem> 
                <ListItem  sx={{paddingLeft:'24px'}}>
                <ListItemText
                    disableTypography
                    primary="Drinkware" 
                    className={style.list_itm}                     
                  />
                </ListItem>    
                <ListItem  sx={{paddingLeft:'24px'}}>
                <ListItemText
                    disableTypography
                    primary="Apparel" 
                    className={style.list_itm}                     
                  />
                </ListItem> 
                <ListItem  sx={{paddingLeft:'24px'}}>
                <ListItemText
                    disableTypography
                    primary="Backpacks" 
                    className={style.list_itm}                     
                  />
                </ListItem>       
            </List>
            </Grid>
           </Stack>
          
           
          </>       
    )
}
