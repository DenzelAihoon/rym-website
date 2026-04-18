import { createBrowserRouter } from "react-router";
import Index from "./pages/Index";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Schools from "./pages/Schools";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import SponsorTier from "./pages/SponsorTier";
import BecomePartner from "./pages/BecomePartner";
import SponsorshipPack from "./pages/SponsorshipPack";
import WaysToHelp from "./pages/WaysToHelp";
import DownloadForm from "./pages/DownloadForm";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/admin-login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/schools",
    Component: Schools,
  },
  {
    path: "/gallery",
    Component: Gallery,
  },
  {
    path: "/about",
    Component: AboutUs,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/donate",
    Component: Donate,
  },
  {
    path: "/sponsor/:tier",
    Component: SponsorTier,
  },
  {
    path: "/become-partner",
    Component: BecomePartner,
  },
  {
    path: "/sponsorship-pack",
    Component: SponsorshipPack,
  },
  {
    path: "/ways-to-help",
    Component: WaysToHelp,
  },
  {
    path: "/download-form",
    Component: DownloadForm,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
