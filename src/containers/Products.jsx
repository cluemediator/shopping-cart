import { Link } from "react-router-dom"

function Products() {
  return (
    <>
      <h1 className="text-2xl text-blue-700 font-bold">Products Page!</h1>
      <Link to="/cart">Cart</Link>
    </>
  )
}

export default Products