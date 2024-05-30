import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

import FooterNavigation from "./FooterNavigation";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);

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
