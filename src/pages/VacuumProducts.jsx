import ProductItem from "../components/products/ProductItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { getVacuumProducts } from "../services/apiProducts";
import Loader from "../components/loader/Loader";
import { useQuery } from "@tanstack/react-query";

function VacuumProducts() {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getVacuumProducts,
  });

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
