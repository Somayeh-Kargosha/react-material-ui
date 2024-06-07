import CategoriesItem from "../components/categories/CategoriesItem";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Loader from "../components/loader/Loader";
import { useGetCategories } from "../components/categories/useGetCategories";

function Home() {
  const { isLoading, categories } = useGetCategories();
  if (isLoading) return <Loader />;
  return (
    <Container sx={{ marginY: 20, color: "#4d4d4d" }}>
      <Typography align="center" variant="h6" sx={{ p: 5 }}>
        خرید بر اساس دسته بندی
      </Typography>
      <Grid container rowSpacing={5} columnSpacing={0} justifyContent="center">
        {categories.map((category) => (
          <CategoriesItem
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
