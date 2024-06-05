import CategoriesItem from "../components/categories/CategoriesItem";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/apiCategories";
import Loader from "../components/loader/Loader";

function Home() {
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

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
