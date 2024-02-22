import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <hr className="my-2" />
      Content
      <hr className="my-2" />
      <Footer />
    </>
  );
}

export default Layout;