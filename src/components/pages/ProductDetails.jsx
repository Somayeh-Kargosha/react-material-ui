import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { useLoaderData } from "react-router-dom";
import { FormatPrice } from "../../utils/helpers";

function ProductDetails() {
  const products = useLoaderData();

  const {
    productName,
    imageName,
    price,
    discount,
    description,
    fileImageName,
    quantity,
    latinName,
  } = products;

  return (
    <>
      <Grid container sx={{ display: "flex", mt: 25, px: { sm: 2, xs: 1 } }}>
        <Grid item md={4} sm={12} marginBottom={6}>
          <Box
            component="img"
            src={`/${fileImageName}/${imageName}`}
            sx={{
              width: { lg: "450px", md: "400px", sm: "400px", xs: "350px" },
            }}
          />
        </Grid>
        <Grid item md={4.5} sm={7} xs={12}>
          <Box padding={2}>
            <Typography variant="h6" color="#111">
              {productName}
            </Typography>
            <Box my="40px">
              <Divider textAlign="left" sx={{ width: "100%" }}>
                <Typography component="span" sx={{ fontSize: 15 }}>
                  {latinName}
                </Typography>
              </Divider>
            </Box>
            <Typography fontSize="16px" color="#111" marginY={3}>
              رنگ: مشکی ، قرمز ، خاکستری
            </Typography>
            <Box>
              <Box
                component="span"
                sx={{
                  bgcolor: "red",
                  p: 2,
                  borderRadius: "50%",
                  display: "inline-block",
                  m: 1,
                  outline: "1px solid #c7c7c7",
                  outlineOffset: "4px",
                }}
              ></Box>
              <Box
                component="span"
                sx={{
                  bgcolor: "black",
                  p: 2,
                  borderRadius: "50%",
                  display: "inline-block",
                  m: 1,
                  outline: "1px solid #c7c7c7",
                  outlineOffset: "4px",
                }}
              ></Box>
              <Box
                component="span"
                sx={{
                  bgcolor: "#bebebe",
                  p: 2,
                  borderRadius: "50%",
                  display: "inline-block",
                  m: 1,
                  outline: "1px solid #c7c7c7",
                  outlineOffset: "4px",
                }}
              ></Box>
            </Box>
            <Box marginY={3} sx={{ display: "flex" }}>
              <SdCardAlertIcon sx={{ mr: "10px", pt: "3px" }} />
              <Typography
                component="span"
                variant="body2"
                lineHeight={2.5}
                paddingX={0.5}
              >
                درخواست مرجوع کردن کالا در گروه جاروبرقی با دلیل انصراف از خرید
                تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد در صورت
                پلمپ بودن، کالا نباید باز شده باشد
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3.5} sm={5} xs={12}>
          <Card
            variant="outlined"
            sx={{
              bgcolor: "#efefef",
              p: 2,
              mt: 11,
              borderRadius: 2,
              border: 1,
              borderColor: "#e0e0e0",
            }}
          >
            <Box
              display="flex"
              justifyContent="right"
              marginTop={5}
              alignItems="center"
            >
              <Typography component="s" fontSize={13}>
                {FormatPrice(price)}
              </Typography>
              <Typography
                component="span"
                bgcolor="#d43131"
                paddingX={1}
                borderRadius={5}
                color="white"
                fontSize={14}
                marginLeft={1}
              >
                %{discount}
              </Typography>
            </Box>
            <ErrorOutlineRoundedIcon sx={{ fontSize: 20, color: "grey" }} />
            <Typography fontSize={18} color="#111" align="right">
              {FormatPrice(price - (price * discount) / 100)}
            </Typography>
            {quantity <= 1 ? (
              <Typography variant="body2" color="red" marginY={2}>
                تنها یک عدد در انبار باقی مانده
              </Typography>
            ) : (
              <Typography variant="body1" marginY={2} fontSize={13}>
                موجود در انبار دیجی کالا
              </Typography>
            )}
            {/* <Typography variant="body2" color="red" marginY={2}>
              تنها یک عدد در انبار باقی مانده
            </Typography> */}
            <Button
              variant="contained"
              disableElevation="false"
              sx={{
                width: 1 / 1,
                bgcolor: "#e75757",
                color: "white",
                my: 4,
                py: 1,
                "&:hover": {
                  background: "#e75757",
                },
              }}
            >
              افزودن به سبد
            </Button>
            <Typography variant="body2" margin={2} marginBottom={3}>
              گارانتی ۲۴ ماهه
            </Typography>
            <Divider variant="middle" />
            <Typography variant="body2" margin={2} marginTop={3}>
              ۱۵۰ امتیاز دیجی‌کلاب
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Divider
        variant="middle"
        sx={{ mt: 8, mb: 6, border: 1, color: "#dddddd" }}
      />

      <Grid container sx={{ px: { sm: 5, xs: 1 }, mb: 10 }}>
        <Grid item sm={1} xs={12}>
          <Typography
            fontSize={18}
            color="#111"
            sx={{
              textDecoration: "underline red 2px",
              textUnderlineOffset: 13,
            }}
          >
            معرفی
          </Typography>
        </Grid>
        <Grid
          item
          sm={9}
          xs={12}
          sx={{
            my: 2,
          }}
        >
          <Typography fontSize={15} marginTop={2} lineHeight={3}>
            {description}
          </Typography>
        </Grid>
        {/* <Grid
          item
          md={3}
          sm={4}
          xs={5}
          sx={{
            my: 2,
          }}
        >
          <Typography fontSize={13} marginTop={2}>
            شناسه کالا
          </Typography>
          <Typography fontSize={13} marginTop={4}>
            تعداد چرخ
          </Typography>
          <Typography fontSize={13} marginTop={4}>
            تعداد سری
          </Typography>
          <Typography fontSize={13} marginTop={4}>
            تعداد پارویی
          </Typography>
          <Typography fontSize={13} marginTop={4}>
            محدوده طول کابل برق
          </Typography>
        </Grid>
        <Grid
          item
          md={6.5}
          sm={5.5}
          xs={7}
          sx={{
            my: 2,
          }}
        >
          <Typography fontSize={12} color="#424141" marginY={2}>
            ۶۲۶۰۴۵۵۷۱۹۹۹۳-۲۹۰۱۲۹۵۹۰۰۱۲۰
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Typography fontSize={12} color="#424141" marginY={2}>
            سه عدد
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Typography fontSize={12} color="#424141" marginY={2}>
            سه عدد
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Typography fontSize={12} color="#424141" marginY={2}>
            یک عدد
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Typography fontSize={12} color="#424141" marginY={2}>
            5 تا 10 متر
          </Typography>
          <Divider sx={{ width: "100%" }} />
        </Grid> */}
      </Grid>
    </>
  );
}

export default ProductDetails;
