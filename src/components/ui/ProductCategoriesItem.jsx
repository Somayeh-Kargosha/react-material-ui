import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "@mui/material";

function ProductCategoriesItem({ to, category }) {
  const { title, imageName } = category;
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Link
        component={RouterLink}
        to={to}
        sx={{ display: "grid", justifyItems: "center", color: "#4d4d4d" }}
      >
        <Box
          component="img"
          src={`/categoryImages/${imageName}`}
          width="130px"
          height="130px"
        />
        <Typography variant="body2" sx={{ marginTop: "15px" }}>
          {title}
        </Typography>
      </Link>
    </Grid>
  );
}

export default ProductCategoriesItem;
