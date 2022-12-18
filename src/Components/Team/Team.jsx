import React from 'react'
import {Container , Grid} from '@mui/material'
import { SectionHeading } from '../Global/GlobalStyles'
import Card from '../Card/Card'

const Team = () => {
  return (
    <Container id='team'>
      <Grid container sx={{flexDirection:'row',justifyContent:'center'}}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> 
          <SectionHeading variant="h4" sx={{ marginTop: "30px" }}>
            OUR TEAM
          </SectionHeading>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> 
         <Card/>
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default Team
