import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <hr className="my-2" />
      <Outlet />
      <hr className="my-2" />
      <Footer />
    </>
  );
}

export default Layout;