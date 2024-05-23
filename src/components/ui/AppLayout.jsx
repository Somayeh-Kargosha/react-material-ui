import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

import FooterNavigation from "./FooterNavigation";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <FooterNavigation />
    </div>
  );
}

export default AppLayout;
