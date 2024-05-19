import { BottomNavigation, Paper, Link, Typography, Box } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link as RouterLink } from "react-router-dom";

function FooterNavigation() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", md: "none" },
      }}
      elevation={3}
    >
      <BottomNavigation>
        <Link component={RouterLink} to="/shoppingcart">
          <Box display="flex" alignItems="center" margin={2}>
            <Typography color="#4d4d4d">سبد خرید</Typography>
            <ShoppingCartOutlinedIcon
              sx={{
                color: "#4d4d4d",
                mr: 1,
              }}
            />
          </Box>
        </Link>
      </BottomNavigation>
    </Paper>
  );
}

export default FooterNavigation;
