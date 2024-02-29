import { NavLink } from "react-router-dom";

function Footer() {
  const categories = [
    { name: "Women", href: "/" },
    { name: "Men", href: "/" },
    { name: "Shoes", href: "/" },
    { name: "Watches", href: "/" },
  ];

  const help = [
    { name: "Track Order", href: "/" },
    { name: "Returns", href: "/" },
    { name: "Shipping", href: "/" },
    { name: "FAQs", href: "/" },
  ];
  return (
    <div className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="block mx-auto max-w-7xl">
        <div className="grid grid-cols-4 mb-8 gap-4">
          <div>
            <div className="uppercase font-bold text-white mb-4">
              Categories
            </div>
            <ul className="mt-8">
              {categories.map((cat, index) => {
                return (
                  <li key={index} className="my-4 text-sm">
                    <NavLink to="/">{cat.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <div className="uppercase font-bold text-white mb-4">Help</div>
            <ul className="mt-8">
              {help.map((cat, index) => {
                return (
                  <li key={index} className="my-4 text-sm">
                    <NavLink to="/">{cat.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div>
              <div className="uppercase font-bold text-white mb-6">
                Get in Touch
              </div>
              <p>
                Any questions?
                <br />
                Let us know in store at Clue Mediator or call us on (+1) 99 999
                9999
              </p>
            </div>
            <div>
              <div className="uppercase font-bold text-white mb-6">
                Newsletter
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="block w-full bg-transparent outline-none border-b border-b-gray-500 py-2 focus-visible:border-b-gray-300"
                />
                <button className="mt-4 btn-v1">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs text-center text-gray-400 border-t border-t-gray-800 pt-8">
          Copyright ©2023 All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;