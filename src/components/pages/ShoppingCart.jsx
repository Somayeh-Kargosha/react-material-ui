import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

function ShoppingCart() {
  return (
    <Box sx={{ px: { lg: 10, md: 6, sm: 6, xs: 1 }, py: 20 }}>
      <Grid container spacing={{ sm: 2 }} rowSpacing={2}>
        <Grid item lg={8.5} md={7.5} xs={12}>
          <Paper
            variant="outlined"
            sx={{ borderRadius: 2, border: 1, borderColor: "#ededed" }}
          >
            <Typography fontSize={16} padding={3} color="#111">
              سبد خرید شما
            </Typography>
            <Typography fontSize={13} paddingX={3}>
              ۱ کالا
            </Typography>
            <Grid container>
              <Grid item sm={4} xs={12}>
                <Box component="img" src="public/1.1.webp" width="140px" />
              </Grid>
              <Grid item sm={8} xs={12}>
                <Box marginLeft={1}>
                  <Typography variant="h6">
                    جاروبرقی پارس خزر مدل VC_2200W
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    marginY={3}
                    marginLeft={0.5}
                  >
                    <Box
                      component="span"
                      sx={{
                        bgcolor: "red",
                        p: 1.3,
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    />
                    <Typography fontSize={15} paddingX={1}>
                      قرمز
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" marginY={3}>
                    <GppGoodOutlinedIcon sx={{ color: "#a7a7a7" }} />
                    <Typography fontSize={15} paddingX={1}>
                      گارانتی 24 ماهه پارس خزر
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={4} xs={6}>
                <Box marginX={3} marginY={3}>
                  <Box
                    component="span"
                    display="flex"
                    sx={{
                      border: 1,
                      borderColor: "#e4e4e4",
                      width: 100,
                      borderRadius: 2,
                      justifyContent: "space-around",
                      py: 0.3,
                    }}
                  >
                    <Box
                      component="button"
                      sx={{
                        border: "none",
                        background: "none",
                        color: "#ff5454",
                      }}
                    >
                      <AddOutlinedIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography color="#ff5454" fontSize={15}>
                        ۱
                      </Typography>
                      <Typography fontSize={12} color="#cccccc">
                        حداکثر
                      </Typography>
                    </Box>
                    <Box
                      component="button"
                      sx={{
                        border: "none",
                        background: "none",
                        color: "#ff5454",
                      }}
                    >
                      <DeleteOutlinedIcon sx={{ fontSize: 22 }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={8} xs={6}>
                <Box marginY={3} marginX={1}>
                  <Typography variant="subtitle1" marginY={1}>
                    ۱۷۹,۶۰۰ تومان تخفیف
                  </Typography>
                  <Typography variant="body2" fontSize={18}>
                    ۵,۲۹۵,۰۰۰ تومان
                  </Typography>
                  <Typography variant="subtitle1" marginY={1}>
                    تنها ۱ عدد در انبار باقی مانده
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={3.5} md={4.5} xs={12}>
          <Paper
            variant="outlined"
            sx={{ borderRadius: 2, border: 1, borderColor: "#e0e0e0" }}
          >
            <Box padding={3}>
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize={15} color="#393939">
                  قیمت کالاها (۱)
                </Typography>
                <Typography fontSize={15} color="#393939">
                  ۵,۴۷۴,۶۰۰ تومان
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" marginY={2}>
                <Typography fontSize={15} color="#696969">
                  جمع سبد خرید
                </Typography>
                <Typography fontSize={15} color="#696969">
                  ۵,۲۹۵,۰۰۰ تومان
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize={15} color="#ff2727">
                  سود شما از خرید
                </Typography>
                <Typography fontSize={15} color="#ff2727">
                  (۴٪) ۱۷۹,۶۰۰ تومان
                </Typography>
              </Box>
              <Button
                variant="contained"
                disableElevation="false"
                sx={{
                  width: 1 / 1,
                  bgcolor: "#e75757",
                  color: "white",
                  mt: 10,
                  py: 1.5,
                  "&:hover": {
                    background: "#e75757",
                  },
                }}
              >
                تایید و تکمیل سفارش
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShoppingCart;
