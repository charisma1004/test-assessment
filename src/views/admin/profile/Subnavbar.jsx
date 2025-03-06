/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
import routes from "routes";
// import { useLocation } from "react-router-dom";
// chakra imports

    function Subnavbar(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
// console.log("Here");
  const createLinks = (routes) => {
    console.log(routes);
    return routes.map((route, index) => {
      {
        return (
          <Link key={index} to={route.layout}>
            <div className="relative my-3 flex hover:cursor-pointer">
              <li
                className="my-[8px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-[#232323] dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              
            </div>
          </Link>
        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default Subnavbar;
