import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";

import Profile from "views/admin/profile";
import Empty from "views/admin/Empty";
import { AiFillHome } from "react-icons/ai";
import { Economic } from "components/icons/Economic";
import { FaUser } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";

import {

  MdOutlineShoppingCart,
  MdBarChart,

} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <AiFillHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Transaction",
    layout: "/admin",
    path: "transaction",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Empty />,
    secondary: true,
  },
  {
    name: "Accounts",
    layout: "/admin",
    path: "accounts",
    icon: <FaUser className="h-6 w-6" />,
    component: <Empty />,
    secondary: true,
  },
  // {
  //   name: "Investments",
  //   layout: "/admin",
  //   path: "investments",
  //   icon: <Economic className="h-6 w-6 bg-" />,
  //   component: <Empty />,
  //   secondary: true,
  // },
  {
    name: "credit Cards",
    layout: "/admin",
    path: "credit-cards",
    icon: <HiCreditCard className="h-6 w-6" />,
    component: <Empty />,
    secondary: true,
  },
 
  {
    name: "Services",
    layout: "/admin",
    path: "services",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Empty />,
    secondary: true,
  },
  {
    name: "My preveilges",
    layout: "/admin",
    path: "my-preveeilges",
    icon: <HiCreditCard className="h-6 w-6" />,
    component: <Empty />,
    secondary: true,
  },
  {
    name: "Setting",
    layout: "/admin",
    path: "setting",
    icon: <IoSettingsSharp className="h-6 w-6" />,
    component: <Profile />,
  }
  
];
export default routes;
