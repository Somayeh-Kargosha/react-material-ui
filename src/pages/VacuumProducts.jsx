import ProductItem from "../components/products/ProductItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Loader from "../components/loader/Loader";
import { useGetVacuumProducts } from "../components/products/useGetVacuumProducts";

function VacuumProducts() {
  const { isLoading, products } = useGetVacuumProducts();

  if (isLoading) return <Loader />;

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

export default VacuumProducts;
