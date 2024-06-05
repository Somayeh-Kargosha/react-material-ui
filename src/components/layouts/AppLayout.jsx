import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

import FooterNavigation from "../ui/FooterNavigation";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <FooterNavigation />
    </div>
  );
}

export default AppLayout;
