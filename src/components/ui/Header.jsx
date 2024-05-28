import { useCartContext } from "../../contexts/CartContext";
import { Link as RouterLink } from "react-router-dom";

import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Link,
  Grid,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  const { totalCartQuantity } = useCartContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item lg={1.3} md={1.7} sm={2.5}>
              <Link component={RouterLink} to="/">
                <Box
                  component="img"
                  src="/logo.svg"
                  sx={{
                    maxWidth: { xs: 80, sm: 110 },
                    mt: { sm: 1 },
                    position: { xs: "absolute", sm: "static" },
                    right: 70,
                    top: 20,
                  }}
                />
              </Link>
            </Grid>
            <Grid item lg={10.4} md={10} sm={9.5} xs={12}>
              <Box
                component="form"
                sx={{
                  p: "2px 20px",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "600px",
                  bgcolor: grey[300],
                  borderRadius: 1,
                }}
              >
                <SearchIcon sx={{ color: grey[500] }} />
                <InputBase sx={{ ml: 3, fontSize: 14 }} placeholder="جستجو" />
              </Box>
            </Grid>

            <Grid
              item
              lg={0.3}
              md={0.3}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Link component={RouterLink} to="/shoppingcart">
                <Badge badgeContent={totalCartQuantity} color="error">
                  <ShoppingCartOutlinedIcon
                    sx={{
                      fontSize: 28,
                      color: "#4d4d4d",
                    }}
                  />
                </Badge>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
