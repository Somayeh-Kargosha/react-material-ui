import { Outlet, useNavigation } from "react-router-dom";
import Header from "../ui/Header";

import FooterNavigation from "../ui/FooterNavigation";
import Loader from "../loader/Loader";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Header />

      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>

      <FooterNavigation />
    </div>
  );
}

export default AppLayout;
