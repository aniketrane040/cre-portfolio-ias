import { Box, Typography,Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EventContainer = styled(Grid)({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
})

export const EventItem = styled(Grid)({
    maxHeight:'600px'
})