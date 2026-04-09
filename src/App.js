import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { HelmetProvider } from 'react-helmet-async';
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const DownloadHelp = lazy(() => import("./pages/DownloadHelp"));
const Detail = lazy(() => import("./pages/Detail"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Admin = lazy(() => import("./pages/Admin"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));


export default function App() {
  return (
    <>
      <HelmetProvider>
        <Suspense
          fallback={
         <Loader/>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download-help" element={<DownloadHelp />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly={true}>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </HelmetProvider>
      <WhatsAppButton />
    </>
  );
}