import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PageLoader from "../components/common/PageLoader";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const SpareParts = lazy(() => import("../pages/SpareParts"));
const ServiceDetail = lazy(() => import("../pages/ServiceDetail"));
const Marketplace = lazy(() => import("../pages/Marketplace"));
const VehicleDetail = lazy(() => import("../pages/VehicleDetail"));
const Rentals = lazy(() => import("../pages/Rentals"));
const Training = lazy(() => import("../pages/Training"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="spare-parts" element={<SpareParts />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="vehicles" element={<Marketplace />} />
        <Route path="vehicles/:slug" element={<VehicleDetail />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="training" element={<Training />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;
