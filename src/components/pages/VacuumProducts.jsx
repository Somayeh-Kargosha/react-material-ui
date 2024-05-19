import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ProductItem from "../ui/ProductItem";

function VacuumProducts() {
  return (
    <Box sx={{ px: 4, my: 20 }}>
      <Grid container justifyContent="center" spacing={{ sm: 0.5, xs: 0 }}>
        <ProductItem to="/productdetails" src="public/1.1.webp">
          <Typography variant="body2" color="#415966" px={2}>
            جاروبرقی پارس خزر مدل vc-2200w
          </Typography>
          <Typography variant="subtitle1" p={3}>
            تنها یک عدد در انبار باقی مانده
          </Typography>
          <Typography variant="subtitle2" color="#415966" px={3} align="left">
            2,499,000 تومان
          </Typography>
          <Typography
            variant="body1"
            component="s"
            px={3}
            display="block"
            align="left"
            dir="rtl"
            py={2}
          >
            2,550,000
          </Typography>
        </ProductItem>
        <ProductItem to="/productdetails" src="public/1.2.webp">
          <Typography variant="body2" color="#415966" px={2}>
            جاروبرقی پارس خزر مدل vc-2200w
          </Typography>
          <Typography variant="body1" p={3}>
            موجود در انبار
          </Typography>
          <Typography variant="subtitle2" color="#415966" px={3} align="left">
            2,499,000 تومان
          </Typography>
          <Typography
            variant="body1"
            px={3}
            align="left"
            py={2}
            component="s"
            display="block"
          >
            2,550,000
          </Typography>
        </ProductItem>
        <ProductItem to="/productdetails" src="public/1.3.webp">
          <Typography variant="body2" color="#415966" px={2}>
            جاروبرقی پارس خزر مدل vc-2200w
          </Typography>
          <Typography variant="subtitle1" p={3}>
            تنها یک عدد در انبار باقی مانده
          </Typography>
          <Typography variant="subtitle2" color="#415966" px={3} align="left">
            2,499,000 تومان
          </Typography>
          <Typography
            variant="body1"
            component="s"
            px={3}
            display="block"
            align="left"
            dir="rtl"
            py={2}
          >
            2,550,000
          </Typography>
        </ProductItem>
        <ProductItem to="/productdetails" src="public/1.4.webp">
          <Typography variant="body2" color="#415966" px={2}>
            جاروبرقی پارس خزر مدل vc-2200w
          </Typography>
          <Typography variant="subtitle1" p={3}>
            تنها یک عدد در انبار باقی مانده
          </Typography>
          <Typography variant="subtitle2" color="#415966" px={3} align="left">
            2,499,000 تومان
          </Typography>
          <Typography
            variant="body1"
            component="s"
            px={3}
            display="block"
            align="left"
            dir="rtl"
            py={2}
          >
            2,550,000
          </Typography>
        </ProductItem>
        <ProductItem to="/productdetails" src="public/1.5.webp">
          <Typography variant="body2" color="#415966" px={2}>
            جاروبرقی پارس خزر مدل vc-2200w
          </Typography>
          <Typography variant="body1" p={3}>
            موجود در انبار
          </Typography>
          <Typography variant="subtitle2" color="#415966" px={3} align="left">
            2,499,000 تومان
          </Typography>
          <Typography
            variant="body1"
            px={3}
            align="left"
            py={2}
            component="s"
            display="block"
          >
            2,550,000
          </Typography>
        </ProductItem>
        <ProductItem to="/productdetails" src="public/1.6.webp">
          <Typography variant="body2" color="#415966" px={2}>
            جاروبرقی پارس خزر مدل vc-2200w
          </Typography>
          <Typography variant="subtitle1" p={3}>
            تنها یک عدد در انبار باقی مانده
          </Typography>
          <Typography variant="subtitle2" color="#415966" px={3} align="left">
            2,499,000 تومان
          </Typography>
          <Typography
            variant="body1"
            component="s"
            px={3}
            display="block"
            align="left"
            dir="rtl"
            py={2}
          >
            2,550,000
          </Typography>
        </ProductItem>
      </Grid>
    </Box>
  );
}

export default VacuumProducts;
