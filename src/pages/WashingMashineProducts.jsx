import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductItem from "../components/products/ProductItem";
import { getWashingMachineProducts } from "../services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/loader/Loader";

function WashingMashineProducts() {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getWashingMachineProducts,
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

export default WashingMashineProducts;
