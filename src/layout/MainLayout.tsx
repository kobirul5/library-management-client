import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-280px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
