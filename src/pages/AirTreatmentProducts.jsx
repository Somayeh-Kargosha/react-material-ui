import ProductItem from "../components/products/ProductItem";


import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Loader from "../components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { getAirTreatmentProducts } from "../services/apiProducts";

function AirTreatmentProducts() {
 
  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAirTreatmentProducts,
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

export default AirTreatmentProducts;
