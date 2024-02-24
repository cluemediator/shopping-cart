import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="text-2xl text-blue-700 font-bold">Home Page!</h1>
      <Link to="/products">Products</Link>
    </>
  );
}

export default Home;