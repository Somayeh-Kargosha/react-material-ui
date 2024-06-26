import { Box } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <Box margin={20}>
      <div>
        <h1>صفحه مورد نظر یافت نشد</h1>
        <p>{error.data || error.message}</p>
        <button onClick={() => navigate(-1)}>
          &larr; بازگشت به صفحه اصلی{" "}
        </button>
      </div>
    </Box>
  );
}

export default Error;
