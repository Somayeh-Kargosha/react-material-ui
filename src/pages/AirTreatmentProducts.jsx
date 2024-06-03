import ProductItem from "../components/products/ProductItem";
import { useLoaderData } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function AirTreatmentProducts() {
  const products = useLoaderData();

  return (
    <Box sx={{ px: 4, my: 20 }}>
      <Grid container justifyContent="center" spacing={{ sm: 0.5, xs: 0 }}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Grid>
    </Box>
  );
}

export default AirTreatmentProducts;
