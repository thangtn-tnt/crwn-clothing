import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

export default function Home() {
  return (
    <>
      <Directory />
      <Outlet />
    </>
  );
}
