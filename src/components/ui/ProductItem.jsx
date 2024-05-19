import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Link, Paper } from "@mui/material";

function ProductItem({ to, src, children }) {
  return (
    <Grid item>
      <Paper
        variant="outlined"
        square
        sx={{
          "&:hover": {
            boxShadow: 10,
          },

          width: 360,
          height: 510,
        }}
      >
        <Link component={RouterLink} to={to}>
          <Box component="img" src={src} width="350px" p={5} />
          <Box>{children}</Box>
        </Link>
      </Paper>
    </Grid>
  );
}

export default ProductItem;
