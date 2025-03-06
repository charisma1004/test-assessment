import React from "react";
import Editprofile from "./components/Editprofile";
import routes from "./router";
import Subnavbar from "./Subnavbar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const ProfileOverview = (props) => {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const getActiveSubbar = (routes) => {
    let activeSubbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout +"/" + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeSubbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin/setting") {
        return (
          <Route path={`${prop.path}`} element={prop.component}  />
        );
      } else {
        return null;
      }
    })
  }
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-[100%] mt-3 bg-white  flex h-full flex-col gap-5 lg:grid ">
        
          <div className="flex">
              <Subnavbar routes={routes}/>
          </div>
        <div>
          <Routes>
                  {getRoutes(routes)}
                  {/* <Route
                    path="/admin"
                    element={<Navigate to="/editprofile" replace />}
                  /> */}
          </Routes>
        </div>
        <div className="z-0 col-span-5 lg:!mb-0">
          <Editprofile />
        </div>
      </div>
     
     
    </div>
  );
};

export default ProfileOverview;
