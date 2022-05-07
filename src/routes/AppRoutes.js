import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRouts } from "./config";

function AppRoutes() {
  return (
    <div>
      <Routes>
        {appRouts.map((route, index) => (
          <Route path={route.path} element={route.component} key={index} />
        ))}
      </Routes>
    </div>
  );
}

export default AppRoutes;
