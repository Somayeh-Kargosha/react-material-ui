import { Outlet } from "react-router-dom";
import Header from "./Header";

import FooterNavigation from "./FooterNavigation";

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
