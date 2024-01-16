import Grid from "@mui/material/Unstable_Grid2";
import {Box, CssBaseline} from "@mui/material";

function Layout({children}) {
    const [headerComponent, menuComponent, kpi1, kpi2, kpi3, kpi4, salesComponent, trafficComponent] = children;

    return (
        <Box style={{display: "flex", height: '100vh'}}>
        <CssBaseline />
        <Grid container sx={{flexGrow: 1, bgcolor:'#EEEEEE', overflow:'hidden'}}>
            <Grid item flexBasis={250}>{menuComponent}</Grid>
            <Grid item flex={1} sx={{margin: '15px 20px'}}>
                <Grid xs={12}>{headerComponent}</Grid>

                <Grid container spacing={2}>
                    <Grid flex={1}>{kpi1}</Grid>
                    <Grid flex={1}>{kpi2}</Grid>
                    <Grid flex={1}>{kpi3}</Grid>
                    <Grid flex={1}>{kpi4}</Grid>
                </Grid>

                <Grid container spacing={2} sx={{marginTop:'15px'}}>
                    <Grid flex={1.5}>{salesComponent}</Grid>
                    <Grid flex={1}>{trafficComponent}</Grid>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    );
}

export default Layout;