import { NavLink } from "react-router-dom";

function Header() {
  const navigations = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="shadow bg-white">
      <div className="mx-auto max-w-7xl px-4 flex justify-between">
        <div className="flex items-center gap-4">
          <NavLink to="/">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Shopping Cart"
            />
          </NavLink>
          {navigations.map((nav, index) => {
            return (
              <NavLink
                key={index}
                to={nav.href}
                className={({ isActive }) =>
                  `text-gray-500 border-b hover:border-b-indigo-500 hover:text-indigo-500 px-4 py-4 h-full text-sm font-medium${
                    isActive ? " border-b-indigo-500 text-indigo-500" : ""
                  }`
                }
              >
                {nav.name}
              </NavLink>
            );
          })}
        </div>
        <div className="flex items-center">
          <i className="bi bi-cart relative">
            <span class="absolute -right-2 -top-1 rounded-full bg-red-600 w-4 h-4 p-0 m-0 text-white font-mono text-xs leading-tight text-center">
              1
            </span>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Header;