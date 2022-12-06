import React from 'react'
import { Typography , Container} from "@mui/material";

const Home = () => {
  return (
    <>
    <main>
        <div>
            <Container maxWidth='sm' sx={{marginTop:'50px'}}>
                <Typography variant='h3' align='center' sx={{color:'white',fontWeight:'bold'}} gutterBottom>CRE-IAS TEAM, PUNE</Typography>
                <Typography variant='h6' align='center' paragrapgh sx={{color:'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, laborum, sequi fugiat sint, est cum tenetur deleniti nisi nemo eum non eaque esse autem et nesciunt repellat? Qui, atque nihil.</Typography>
            </Container>
        </div>
    </main>
    </>
  )
}

export default Home
