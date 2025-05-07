import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="container mx-auto p-4">
      <Outlet />
    </div>
  );
}
