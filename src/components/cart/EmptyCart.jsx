import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function EmptyCart() {
  return (
    <Box sx={{ px: { lg: 10, md: 6, sm: 6, xs: 1 }, py: 20 }}>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            variant="outlined"
            sx={{
              borderRadius: 2,
              border: 1,
              borderColor: "#ededed",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: 10,
            }}
          >
            <Box component="img" src="src/assets/img/empty-cart.svg" />
            <Typography fontSize={20} padding={3} color="primary.dark">
              سبد خرید شما خالی است!
            </Typography>
            <Link component={RouterLink} to="/">
              <Typography fontSize={14}>
                میتوانید برای سفارش به صفحه اصلی برگردید &larr;
              </Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EmptyCart;
