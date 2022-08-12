import {
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    Box,
  } from "@mui/material";
  import style from "../../assets/css/style.module.css";

  
  export const Footer = () => {
    
    return (
      <>
        <Grid container sx={{background: '#E6E8E9',paddingTop:'80px'}} >
          <Grid item xs={3}>
          <Box component="span" className={style.logo_footer}>
              <Typography className={style.logo_text}>Logo</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
          <Typography className={style.footer_title}>Our company</Typography>
          <List >            
           <ListItem>
                  <ListItemText
                    disableTypography
                    primary="About us"
                    className={style.footer_link}                        
                  />                  
                </ListItem> 
                <ListItem  sx={{paddingLeft:'24px'}}>   
                <ListItemText
                    disableTypography
                    primary="FAQ"  
                    className={style.footer_link}                    
                  />
                </ListItem>
                <ListItem  sx={{paddingLeft:'24px'}}> 
                <ListItemText
                    disableTypography
                    primary="Partnerships"
                    className={style.footer_link}      
                  />
                </ListItem>  
                <ListItem  sx={{paddingLeft:'24px'}}>   
                <ListItemText
                    disableTypography
                    primary="Sustainability"  
                    className={style.footer_link}                    
                  />
                </ListItem>
                <ListItem  sx={{paddingLeft:'24px'}}> 
                <ListItemText
                    disableTypography
                    primary="Blog"
                    className={style.footer_link}      
                  />
                </ListItem>  
              </List>  

          </Grid>
          <Grid item xs={3}>  <Typography className={style.footer_title}>How can we help</Typography>
          <List >            
           <ListItem>
                  <ListItemText
                    disableTypography
                    primary="Place a ticket"
                    className={style.footer_link}                        
                  />                  
                </ListItem> 
                <ListItem  sx={{paddingLeft:'24px'}}>   
                <ListItemText
                    disableTypography
                    primary="Track your order"  
                    className={style.footer_link}                    
                  />
                </ListItem>
                <ListItem  sx={{paddingLeft:'24px'}}> 
                <ListItemText
                    disableTypography
                    primary="Help center"
                    className={style.footer_link}      
                  />
                </ListItem>  
                
              </List>  


          </Grid>
          <Grid item xs={3}>
          <Typography className={style.footer_title}>Information</Typography>
          <List >            
           <ListItem>
                  <ListItemText
                    disableTypography
                    primary="Contact us"
                    className={style.footer_link}                        
                  />                  
                </ListItem> 
                <ListItem  sx={{paddingLeft:'24px'}}>   
                <ListItemText
                    disableTypography
                    primary="Live chat"  
                    className={style.footer_link}                    
                  />
                </ListItem>
                <ListItem  sx={{paddingLeft:'24px'}}> 
                <ListItemText
                    disableTypography
                    primary="Privacy"
                    className={style.footer_link}      
                  />
                </ListItem>  
                <ListItem  sx={{paddingLeft:'24px'}}>   
                <ListItemText
                    disableTypography
                    primary="Terms of use"  
                    className={style.footer_link}                    
                  />
                </ListItem>
                <ListItem  sx={{paddingLeft:'24px'}}> 
                <ListItemText
                    disableTypography
                    primary="Blog"
                    className={style.footer_link}      
                  />
                </ListItem>  
              </List>  

          </Grid>

        </Grid>
      </>
    );
  };