import React from "react";

// Admin Imports
import Editprofile from "./components/Editprofile";
import Preference from "./components/Preference";
import Security from "./components/Security";



const routes = [
  
  {
    name: "Editprofile",
    layout: "/editprofile",
    path: "editprofile",
    component: <Editprofile />,
    secondary: true,
  },
  {
    name: "Preference",
    layout: "/preference",
    path: "preference",
    component: <Preference />,
    secondary: true,
  },
  {
    name: "Security",
    layout: "/security",
    path: "security",
    component: <Security />,
  }
  
];
export default routes;
