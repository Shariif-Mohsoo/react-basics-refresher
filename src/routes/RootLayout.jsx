import { Outlet } from "react-router-dom";
// outlet is just a placeholder for the children routes.

import MainHeader from "../components/MainHeader";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;
