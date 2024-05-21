import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

import ProductCategoriesItem from "../ui/ProductCategoriesItem";
import { useLoaderData } from "react-router-dom";

function Home() {
  const categories = useLoaderData();

  return (
    <Container sx={{ marginY: 20, color: "#4d4d4d" }}>
      <Typography align="center" variant="h6" sx={{ p: 5 }}>
        خرید بر اساس دسته بندی
      </Typography>
      <Grid container rowSpacing={5} columnSpacing={0} justifyContent="center">
        {categories.map((category) => (
          <ProductCategoriesItem category={category} key={category.id} />
        ))}

        {/* <ProductCategoriesItem to="/vacuumproducts" src="public/1.webp">
          جاروبرقی
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/2.webp">
          ماشین لباسشویی
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/3.webp">
          سرمایش و گرمایش
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/4.webp">
          یخچال
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/5.webp">
          پخت و پز
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/6.webp">
          اتو
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/7.webp">
          فر و گاز
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/8.webp">
          ماشین ظرفشویی
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/9.webp">
          صوتی و تصویری
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/10.webp">
          نوشیدنی ساز
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/11.webp">
          خردکن و غذاساز
        </ProductCategoriesItem>
        <ProductCategoriesItem to="/vacuumproducts" src="public/12.webp">
          چرخ خیاطی
        </ProductCategoriesItem> */}
      </Grid>
    </Container>
  );
}

export default Home;
