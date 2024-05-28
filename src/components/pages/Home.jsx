import { useLoaderData } from "react-router-dom";
import ProductCategoriesItem from "../ui/ProductCategoriesItem";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


function Home() {
  const categories = useLoaderData();

  return (
    <Container sx={{ marginY: 20, color: "#4d4d4d" }}>
      <Typography align="center" variant="h6" sx={{ p: 5 }}>
        خرید بر اساس دسته بندی
      </Typography>
      <Grid container rowSpacing={5} columnSpacing={0} justifyContent="center">
        {categories.map((category) => (
          <ProductCategoriesItem
            category={category}
            to={`/category-${category.category}`}
            key={category.id}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
